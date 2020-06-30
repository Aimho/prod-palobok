import React from "react";

import useRouter from "../../utils/useRouter";

import * as CommonStyle from "../style";
import NoticeList from "./NoticeList";
import NoticeDetail from "./NoticeDetail";

const Notice = () => {
  const { params } = useRouter();

  const Content = () => {
    if (!params.id) return <NoticeList />;
    return <NoticeDetail />;
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
