import React, { useState } from "react";

import * as S from "./style";
import * as Icon from "../../icon";
import * as CommonStyle from "../style";

interface SlideCardProps {
  imgTags: any[];
}
const SlideCard = (props: SlideCardProps) => {
  const [idx, setIdx] = useState(0);

  const onClickPrev = () => setIdx((idx) => idx - 1),
    disabledPrev = idx === 0;

  const onClickNext = () => setIdx((idx) => idx + 1),
    disabledNext = idx === props.imgTags.length - 1;

  return (
    <S.SlideCard>
      {props.imgTags[idx]}
      <nav>
        <button onClick={onClickPrev} disabled={disabledPrev}>
          <Icon.ArrowLeft />
          <span>이전</span>
        </button>
        <button onClick={onClickNext} disabled={disabledNext}>
          <span>다음</span>
          <Icon.ArrowRight />
        </button>
      </nav>
    </S.SlideCard>
  );
};

interface TabNavProps {
  tabList: string[];
  target: string;
  setTarget: (val: string) => void;
}
const TabNav = (props: TabNavProps) => {
  const itemWidthPer = 100 / props.tabList.length;
  return (
    <S.TabNav itemWidthPer={itemWidthPer}>
      {props.tabList.map((item) => (
        <button
          key={item}
          className={`tab-nav ${props.target === item ? "active" : ""}`}
          onClick={() => props.setTarget(item)}
        >
          {item}
        </button>
      ))}
    </S.TabNav>
  );
};

interface TabContentImageProps {
  title: string | React.ReactNode;
  alt: string;
  imgPc: string;
  imgMobile?: string;
}
const TabContentImage = (props: TabContentImageProps) => {
  const imgMobile = props.imgMobile ? props.imgMobile : props.imgPc;
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <img
        src={props.imgPc}
        alt={props.alt}
        className="full-width visible-desktop"
      />
      <img
        src={imgMobile}
        alt={props.alt}
        className="full-width visible-mobile"
      />
    </React.Fragment>
  );
};

const GreetingTitle = () => {
  return (
    <React.Fragment>
      <h2>더 순수하게 더 푸짐하게 더 깨끗하게</h2>
    </React.Fragment>
  );
};

const GreetingContent = () => {
  return (
    <React.Fragment>
      <img
        className="full-width"
        src={require("../../img/brand-introduce-1.jpg")}
        alt="회사 건물"
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
        1g의 첨가물도 없는 100% 순수진국을 정직하고 정성스럽게 만들고 있으며,
        깨끗한 물과 양질의 원재료를
        <br />
        사용하여 정성을 담아 끓이고 있습니다.
        <br />
        <br />
        팔복은 <span>'더 순수하게 더 푸짐하게 더 깨끗하게'</span> 라는 기업
        슬로건을 바탕으로
        <br />
        고객님들에게 최고의 사골진국을 기본으로 도가니탕, 우족탕, 꼬리곰탕 등
        다양한 음식을 올리고 있습니다.
        <br />
        <br />
        앞으로도 품질만큼은 타협하지 않는 팔복(八福)이 되도록 노력하겠습니다.
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
    </React.Fragment>
  );
};

const StoreGangDongTitle = () => {
  return (
    <React.Fragment>
      <h2>
        <span className="highlight">팔복 강동점</span>이 국내 유일한
        통도가니탕으로 <br className="visible-mobile" />
        정성껏 모시겠습니다.
      </h2>

      <p>
        강동점은 서하남 IC 입구쪽에 위치해있으며{" "}
        <br className="visible-mobile" />
        <span className="highlight">새벽 1시까지 운영</span>되고 있습니다.
        <br /> 매장에 오시면 통도가니와 사골 진국 세트 구매도 가능합니다.
      </p>
    </React.Fragment>
  );
};

const StoreGangDongInfo = () => {
  const info = [
    { title: "점포명", label: "팔복도가니탕집 강동점" },
    { title: "전화번호", label: "02-488-1488" },
    { title: "주소", label: "경기도 하남시 감북동 444-13" },
    {
      title: "영업시간",
      label: (
        <React.Fragment>
          오전 6시 ~ 오후 10시 30분 <br className="visible-mobile" />
          (식사마감 오후 9시 50분)
        </React.Fragment>
      ),
    },
    { title: "주차여부", label: "30대 가능" },
    { title: "좌석수", label: "A홀 50석, B홀 50석" },
  ];

  return (
    <S.StoreInfo>
      <img
        src={require("../../img/brand-store-1.jpg")}
        alt="강동점"
        className="store-pic"
      />
      <div className="detail">
        {info.map((item) => (
          <p key={item.title}>
            <span className="title">{item.title}</span>
            {item.label}
          </p>
        ))}
      </div>
    </S.StoreInfo>
  );
};

const StoreGangDongMenus = () => {
  const Menus = () => {
    const dataSource = [
      { title: "통 도가니탕", price: "14,000원" },
      { title: "특선 우족탕", price: "15,000원" },
      { title: "모듬 설렁탕", price: "10,000원" },
    ];

    return (
      <div className="menu-container">
        {dataSource.map((item) => (
          <div className="menu-item" key={item.title}>
            • {item.title} (1인분)
            <hr />
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    );
  };

  const imgTags = [
    <img src={require("../../img/brand-store-menu-1.jpg")} alt="메뉴 이미지" />,
    <img src={require("../../img/brand-store-menu-2.jpg")} alt="메뉴 이미지" />,
    <img src={require("../../img/brand-store-menu-3.jpg")} alt="메뉴 이미지" />,
    <img src={require("../../img/brand-store-menu-4.jpg")} alt="메뉴 이미지" />,
  ];

  return (
    <S.StoreMenu>
      <CommonStyle.SubTitleContent>메뉴 소개</CommonStyle.SubTitleContent>
      <Menus />
      <SlideCard imgTags={imgTags} />
    </S.StoreMenu>
  );
};

const StoreGangDongPic = () => {
  const src = [
    require("../../img/brand-store-pic-1.jpg"),
    require("../../img/brand-store-pic-2.jpg"),
    require("../../img/brand-store-pic-3.jpg"),
    require("../../img/brand-store-pic-4.jpg"),
  ];

  return (
    <S.StorePic>
      <CommonStyle.SubTitleContent>매장 사진</CommonStyle.SubTitleContent>
      <div className="img-container">
        {src.map((item, index) => (
          <img src={item} alt="매장사진" key={index} />
        ))}
      </div>
    </S.StorePic>
  );
};

const StoreGangDongWayToCome = () => {
  const dataSource = [
    {
      title: "서울에서 오실 때",
      detail: (
        <span>
          강변북로 또는 올림픽대로 → 올림픽대교 남단 사거리 → 서하남 IC 방향 →
          서하남 IC입구 사거리 200m 지나 우측 (서하남 IC입구 400m 전)
        </span>
      ),
    },
    {
      title: "서울외곽순환고속도로 이용하실 때",
      detail: (
        <span>
          서울외곽순환고속도로를 타고 서하남 IC에서 강동 방면으로 진입 → 진입후
          300m 앞 사거리에서 유턴 → 유턴후 200m지나 우측
        </span>
      ),
    },
    {
      title: "대중교통 이용하실 때",
      detail: (
        <React.Fragment>
          <span className="subway">
            <span className="chip" style={{ background: "#087A01" }}>
              2호선
            </span>
            잠실역 7번 또는 8번출구 → 일반버스 30-5번(20분 소요) → 서하남 나들목
            배다리역에서 하차
          </span>
          <span className="subway">
            <span className="chip" style={{ background: "#4D0068" }}>
              5호선
            </span>
            둔촌동역 3번 출구 → 마을버스 1번 (5분 소요) → 서하남 나들목
            배다리역에서 하차 <br />
            둔촌동역 4번 출구 → 지선버스 3316 (5분 소요) → 서하남 IC입구
            정류장에서 하차 → 도보로 직진 400m 앞
          </span>
        </React.Fragment>
      ),
    },
  ];
  return (
    <S.StoreWayToCome>
      <CommonStyle.SubTitleContent>오시는 길</CommonStyle.SubTitleContent>
      <img
        src={require("../../img/brand-store-way-to-come-1.jpg")}
        alt="오시는 길"
        className="full-width"
      />
      {dataSource.map((item, index) => (
        <div className="method" key={index}>
          <Icon.Check className="icon" />
          <div>
            {item.title}
            {item.detail}
          </div>
        </div>
      ))}
    </S.StoreWayToCome>
  );
};

const StoreCheonanTitle = () => {
  return (
    <React.Fragment>
      <h2>
        <span className="highlight">팔복 천안점</span>이 국내 최고의 진국으로
        <br className="visible-mobile" /> 정성껏 모시겠습니다.
      </h2>
      <p>
        천안점은 천안IC 입구쪽에 위치해 있으며 <br className="visible-mobile" />
        <span className="highlight">넓고 쾌적한 환경</span>을 자랑합니다.
        <br /> 매장에 오시면 통도가니와 사골 진국 세트 구매도 가능합니다.
      </p>
    </React.Fragment>
  );
};

const StoreCheonanInfo = () => {
  const info = [
    { title: "점포명", label: "팔복도가니탕집 천안점" },
    { title: "전화번호", label: "041-556-0100" },
    { title: "주소", label: "충남 천안시 동남구 신부동 37-1" },
    {
      title: "영업시간",
      label: (
        <React.Fragment>
          오전 10시 ~ 오후 09시 30분 <br className="visible-mobile" />
          (식사마감 오후 8시 30분)
        </React.Fragment>
      ),
    },
    { title: "주차여부", label: "50대 가능" },
    { title: "좌석수", label: "1층 56석, 2층 52석" },
  ];

  return (
    <S.StoreInfo>
      <img
        src={require("../../img/brand-store-2.jpg")}
        alt="강동점"
        className="store-pic"
      />
      <div className="detail">
        {info.map((item) => (
          <p key={item.title}>
            <span className="title">{item.title}</span>
            {item.label}
          </p>
        ))}
      </div>
    </S.StoreInfo>
  );
};

const StoreCheonanMenus = () => {
  const Menus = () => {
    const dataSource = [
      { title: "통 도가니탕", price: "14,000원" },
      { title: "특선 우족탕", price: "15,000원" },
      { title: "모듬 설렁탕", price: "10,000원" },
    ];

    return (
      <div className="menu-container">
        {dataSource.map((item) => (
          <div className="menu-item" key={item.title}>
            • {item.title} (1인분)
            <hr />
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    );
  };

  const imgTags = [
    <img src={require("../../img/brand-store-menu-1.jpg")} alt="메뉴 이미지" />,
    <img src={require("../../img/brand-store-menu-2.jpg")} alt="메뉴 이미지" />,
    <img src={require("../../img/brand-store-menu-3.jpg")} alt="메뉴 이미지" />,
    <img src={require("../../img/brand-store-menu-4.jpg")} alt="메뉴 이미지" />,
  ];

  return (
    <S.StoreMenu>
      <CommonStyle.SubTitleContent>메뉴 소개</CommonStyle.SubTitleContent>
      <Menus />
      <SlideCard imgTags={imgTags} />
    </S.StoreMenu>
  );
};

const StoreCheonanPic = () => {
  const src = [
    require("../../img/brand-store-pic-5.jpg"),
    require("../../img/brand-store-pic-6.jpg"),
    require("../../img/brand-store-pic-7.jpg"),
    require("../../img/brand-store-pic-8.jpg"),
  ];

  return (
    <S.StorePic>
      <CommonStyle.SubTitleContent>매장 사진</CommonStyle.SubTitleContent>
      <div className="img-container">
        {src.map((item, index) => (
          <img src={item} alt="매장사진" key={index} />
        ))}
      </div>
    </S.StorePic>
  );
};

const StoreCheonanWayToCome = () => {
  const dataSource = [
    {
      title: "고속도로 이용하실 때",
      detail: (
        <span>
          천안 톨게이트 나와 버스터미널 방면으로 진입 → 첫번째 사거리 유턴 →
          SK주유소 지나 천안 숙박단지 입구로 진입
        </span>
      ),
    },
    {
      title: "대중교통 이용하실 때",
      detail: (
        <span>
          천안 지하철역(기차역) → 버스 200번대/700번대(10분소요) →
          하늘공원장례식장 하차 → 천안 숙박단지 입구로 진입(도보3분)
        </span>
      ),
    },
  ];
  return (
    <S.StoreWayToCome>
      <CommonStyle.SubTitleContent>오시는 길</CommonStyle.SubTitleContent>
      <img
        src={require("../../img/brand-store-way-to-come-2.jpg")}
        alt="오시는 길"
        className="full-width"
      />
      {dataSource.map((item, index) => (
        <div className="method" key={index}>
          <Icon.Check className="icon" />
          <div>
            {item.title}
            {item.detail}
          </div>
        </div>
      ))}
    </S.StoreWayToCome>
  );
};

export {
  // 공통
  TabNav,
  TabContentImage,
  SlideCard,
  // 팔복 - 인사말
  GreetingTitle,
  GreetingContent,
  // 팔복 - 매장안내 (강동점)
  StoreGangDongTitle,
  StoreGangDongInfo,
  StoreGangDongMenus,
  StoreGangDongPic,
  StoreGangDongWayToCome,
  // 팔복 - 매장안내 (천안점)
  StoreCheonanTitle,
  StoreCheonanInfo,
  StoreCheonanMenus,
  StoreCheonanPic,
  StoreCheonanWayToCome,
};
