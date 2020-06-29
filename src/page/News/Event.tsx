import React, { useEffect, useState } from "react";

import { getEventList } from "../../api/newsApi";
import useRouter, { searchQueryToObject } from "../../utils/useRouter";

import * as CommonStyle from "../style";
import EventList from "./EventList";

const Event = () => {
  const { params, search } = useRouter();
  const [payload, setPayload] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const query = search ? searchQueryToObject(search) : { page: 1 };

    function getApi(type: "detail" | "list") {
      if (type === "detail") {
      } else {
        getEventList(query.page ? query.page : 1).then((resp) => {
          if (resp && resp.data) {
            setPayload(resp.data.data);
            setTotalCount(resp.data.totalCount);
          }
        });
      }
    }

    getApi(params.id ? "detail" : "list");
  }, [params, search]);

  const Content = () => {
    if (!params.id)
      return <EventList payload={payload} totalCount={totalCount} />;
    return null;
  };

  return (
    <CommonStyle.SubTitleSection>
      <CommonStyle.Container>
        <h2>이벤트</h2>
        <p className="sub-title">
          팔복에서 진행하는 이벤트에 참여하시면 많은 혜택이 있습니다.
        </p>

        <Content />
      </CommonStyle.Container>
    </CommonStyle.SubTitleSection>
  );
};

export default Event;
