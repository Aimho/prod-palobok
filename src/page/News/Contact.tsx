import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getContactList } from "../../api/newsApi";
import useRouter, { searchQueryToObject } from "../../hooks/useRouter";

import * as S from "./style";
import * as CommonStyle from "../style";
import ContactList from "./ContactList";

const Contact = () => {
  const { params, search } = useRouter();
  const [payload, setPayload] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const query = search ? searchQueryToObject(search) : { page: 1 };

    function getApi(type: "detail" | "list") {
      if (type === "detail") {
      } else {
        getContactList(query.page ? query.page : 1).then((resp) => {
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
      return <ContactList payload={payload} totalCount={totalCount} />;
    return null;
  };

  return (
    <CommonStyle.SubTitleSection>
      <S.ContactContainer>
        <h2>고객문의</h2>
        <p className="sub-title">
          - 고객님의 질문에 신속하고 정확하게 답변해 드리겠습니다.
          <br />- 배송지 변경 및 결제 관련 문의사항은{" "}
          <span className="highlight">1577-0688</span>로 전화주시면{" "}
          <br className="visible-mobile" />
          신속하게 처리해 드리겠습니다.
        </p>
        <Link className="button" to={"/contact/create"}>
          문의하기
        </Link>

        <Content />
      </S.ContactContainer>
    </CommonStyle.SubTitleSection>
  );
};

export default Contact;
