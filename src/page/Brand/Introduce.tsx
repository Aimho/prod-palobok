import React, { useState } from "react";

import * as S from "./style";
import * as E from "./element";

const Introduce = () => {
  // data
  const tabList = ["인사말", "연혁", "팔복만의 특별함"];
  // hooks
  const [target, setTarget] = useState(tabList[0]);

  const TabContent = () => {
    if (target === tabList[0]) {
      return (
        <S.GreetingTab>
          <E.GreetingTitle />
          <E.GreetingContent />
        </S.GreetingTab>
      );
    }
    if (target === tabList[1]) {
      const title = (
        <React.Fragment>
          1992년부터 지금까지 팔복은 항상{" "}
          <span className="highlight">성장하는 기업</span>입니다.
        </React.Fragment>
      );
      return (
        <S.HistoryTab>
          <E.TabContentImage
            title={title}
            alt="연혁"
            imgPc={require("../../img/brand-history-1.jpg")}
            imgMobile={require("../../img/brand-history-1-mobile.jpg")}
          />
        </S.HistoryTab>
      );
    }
    if (target === tabList[2]) {
      return (
        <S.SecretTab>
          <E.TabContentImage
            title={"더 순수하게 더 푸짐하게 더 깨끗하게"}
            alt="팔복만의 특별함"
            imgPc={require("../../img/brand-special-1.jpg")}
            imgMobile={require("../../img/brand-special-1-mobile.jpg")}
          />
        </S.SecretTab>
      );
    }
    return null;
  };

  return (
    <S.Section>
      <S.Container>
        <h1>회사소개</h1>
        <E.TabNav tabList={tabList} target={target} setTarget={setTarget} />
        <TabContent />
      </S.Container>
    </S.Section>
  );
};

export default Introduce;
