import React from "react";

import * as S from "./style";
import * as Icon from "../../icon";

interface ProductCardProps {
  src: string;
  subtitle: string;
  desc: React.ReactNode;
  link?: string;
}
const ProductCard = (props: ProductCardProps) => {
  const MoveToLink = () =>
    props.link ? (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="market"
      >
        제품 구매 <Icon.ArrowRight />
      </a>
    ) : (
      <a href="tel:1577-0688" className="market">
        구매상담 1577-0688
      </a>
    );

  return (
    <S.ProductCard>
      <img src={props.src} alt={props.subtitle} />
      <div className="info">
        <S.ProductSubTitle>{props.subtitle}</S.ProductSubTitle>
        <p className="desc">{props.desc}</p>
        <MoveToLink />
      </div>
    </S.ProductCard>
  );
};

const PlantInfo = () => {
  const infoList = [
    { title: "공장명", detail: "진국 플랜트" },
    { title: "설립년도", detail: "2000년" },
    { title: "공장위치", detail: "견기도 양평군 강상면" },
    {
      title: "주생산품",
      detail: "사골진국, 통도가니, 통우족, 김치, 석박지 등",
    },
  ];

  return (
    <S.PlantInfo>
      <img
        src={require("../../img/product-plant-1.jpg")}
        alt="양평 진국 플랜트"
      />
      <div className="info">
        {infoList.map((info, index) => (
          <p key={index}>
            <strong>{info.title}</strong>
            {info.detail}
          </p>
        ))}
      </div>
    </S.PlantInfo>
  );
};

const PlantAppointment = () => {
  const appointmentList = [
    { label: "양질의 원재료", backgroundColor: "#B41118" },
    { label: "철저한 위생관리", backgroundColor: "#999" },
    {
      label: (
        <>
          친환경
          <br />
          생산 시스템
        </>
      ),
      backgroundColor: "#474747",
    },
    {
      label: (
        <>
          균일한 맛과 품질을
          <br />
          위한 일일 한정생산
        </>
      ),
      backgroundColor: "#000",
    },
  ];

  return (
    <S.PlantAppointment>
      {appointmentList.map((item, index) => (
        <div
          className="appointment-item"
          key={index}
          style={{ backgroundColor: item.backgroundColor }}
        >
          {item.label}
        </div>
      ))}
    </S.PlantAppointment>
  );
};

export { ProductCard, PlantInfo, PlantAppointment };
