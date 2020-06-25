import React, { useState } from "react";

import * as S from "./style";

const Introduce = () => {
  // data
  const tabList = ["인사말", "연혁", "팔복만의 특별함"];

  // hooks
  const [target, setTarget] = useState("인사말");

  // components
  const TabNav = () => (
    <S.TabNav itemWidthPer={33.333}>
      {tabList.map((item, index) => (
        <button
          key={index}
          className={`tab-nav ${target === item ? "active" : ""}`}
          onClick={() => setTarget(item)}
        >
          {item}
        </button>
      ))}
    </S.TabNav>
  );

  const TabContent = () => {
    if (target === tabList[0]) {
      return (
        <S.GreetingTab>
          <h2>더 순수하게 더 푸짐하게 더 깨끗하게</h2>
          <img
            className="full-width"
            src={require("../../img/brand-introduce-1.jpg")}
            alt="인사말"
          />
          <p className="desc">
            서울 청진동에서 작은 설렁탕가게로 시작한 팔복은 직접 가게에서 드시는
            손님들로부터 그 맛을 인정받아
            <br />
            1998년 <span>정직, 나눔, 감사</span>의 기업정신 아래 주식회사 팔복을
            설립하였습니다.
            <br />
            이후 20여년간 사골진국 전문기업으로 명성을 이어오고 있습니다.
            <br />
            <br />
            1g의 첨가물도 없는 100% 순수진국을 정직하고 정성스럽게 만들고
            있으며, 깨끗한 물과 양질의 원재료를
            <br />
            사용하여 정성을 담아 끓이고 있습니다.
            <br />
            <br />
            팔복은 <span>'더 순수하게 더 푸짐하게 더 깨끗하게'</span> 라는 기업
            슬로건을 바탕으로
            <br />
            고객님들에게 최고의 사골진국을 기본으로 도가니탕, 우족탕, 꼬리곰탕
            등 다양한 음식을 올리고 있습니다.
            <br />
            <br />
            앞으로도 품질만큼은 타협하지 않는 팔복(八福)이 되도록
            노력하겠습니다.
          </p>
          <img
            className="brand-mental visible-desktop"
            src={require("../../img/brand-introduce-2.jpg")}
            alt="기업정신"
          />
          <img
            className="brand-mental visible-mobile"
            src={require("../../img/brand-introduce-2-mobile.jpg")}
            alt="기업정신"
          />
        </S.GreetingTab>
      );
    }
    if (target === tabList[1]) {
      return (
        <S.HistoryTab>
          <h2>
            1992년부터 지금까지 팔복은 항상 <span>성장하는 기업</span>입니다.
          </h2>
          <img
            className="full-width visible-desktop"
            src={require("../../img/brand-history-1.jpg")}
            alt="연혁"
          />
          <img
            className="full-width visible-mobile"
            src={require("../../img/brand-history-1-mobile.jpg")}
            alt="연혁"
          />
        </S.HistoryTab>
      );
    }
    if (target === tabList[2]) {
      return (
        <S.SecretTab>
          <h2>더 순수하게 더 푸짐하게 더 깨끗하게</h2>
          <img
            className="full-width visible-desktop"
            src={require("../../img/brand-introduce-3.jpg")}
            alt="팔복만의 특별함"
          />
          <img
            className="full-width visible-mobile"
            src={require("../../img/brand-introduce-3-mobile.jpg")}
            alt="팔복만의 특별함"
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
        <TabNav />
        <TabContent />
      </S.Container>
    </S.Section>
  );
};

export default Introduce;
