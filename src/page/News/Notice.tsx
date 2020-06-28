import React, { useEffect, useState } from "react";

import { getNoticeList } from "../../api/newsApi";
import useRouter, { searchQueryToObject } from "../../hooks/useRouter";

import * as CommonStyle from "../style";
import NoticeList from "./NoticeList";

const Notice = () => {
  const { params, search } = useRouter();
  const [payload, setPayload] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const query = search ? searchQueryToObject(search) : { page: 1 };

    function getApi(type: "detail" | "list") {
      if (type === "detail") {
      } else {
        getNoticeList(query.page ? query.page : 1).then((resp) => {
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
      return <NoticeList payload={payload} totalCount={totalCount} />;
    return null;
  };

  return (
    <CommonStyle.SubTitleSection>
      <CommonStyle.Container>
        <h2>공지사항</h2>
        <p className="sub-title">
          팔복의 다양한 안내사항을 신속히 알려드립니다.
        </p>

        <Content />
      </CommonStyle.Container>
    </CommonStyle.SubTitleSection>
  );
};

export default Notice;
