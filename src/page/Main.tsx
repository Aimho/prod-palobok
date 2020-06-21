import React from "react";

import * as S from "./MainStyle";
import * as Icon from "../icon";

const Main = () => {
  // components
  const CompanyCard = () => {
    const companyList = [
      {
        img: require("../img/main-company-card-1.jpg"),
        title: "since 1992",
        description: [
          "1992년 종로구 청진동에로 설렁탕 가게로",
          "시작해 대한민국 최초로 사골진국팩 생산",
        ],
      },
      {
        img: require("../img/main-company-card-2.jpg"),
        title: "Business",
        description: [
          "가정에서는 간편하게 먹는 든든한 한 끼,",
          "식당 및 단체 급식소에는 대량 공급 가능",
        ],
      },
      {
        img: require("../img/main-company-card-3.jpg"),
        title: "400만팩 돌파",
        description: ["진국, 도가니 포장상품", "4,000,000팩 판매 돌파"],
      },
    ];

    return (
      <S.Container
        className="row"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {companyList.map((item, index) => (
          <S.CompanyCard key={index} image={item.img}>
            <p className="title">{item.title}</p>
            {item.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </S.CompanyCard>
        ))}
      </S.Container>
    );
  };

  const ValueCard = () => {
    const valueList = [
      {
        icon: <Icon.LightBulb />,
        title: "정직",
      },
      {
        icon: <Icon.Favorite />,
        title: "나눔",
      },
      {
        icon: <Icon.Handshake />,
        title: "감사",
      },
    ];

    return (
      <div className="content">
        {valueList.map((item, index) => (
          <S.ValueCard key={index}>
            {item.icon}
            {item.title}
          </S.ValueCard>
        ))}
      </div>
    );
  };

  const ProductCard = () => {
    const productList = [
      {
        img: require("../img/main-product-sagol.png"),
        titleKor: "사골진국",
        titleEng: "Sagol Jinguk",
        link: "/",
      },
      {
        img: require("../img/main-product-dogani.png"),
        titleKor: "도가니탕",
        titleEng: "Dogani-Tang",
        link: "/",
      },
      {
        img: require("../img/main-product-seolleong.png"),
        titleKor: "설렁탕",
        titleEng: "Seolleong-Tang ",
        link: "/",
      },
      {
        img: require("../img/main-product-ox.png"),
        titleKor: "우족탕",
        titleEng: "Ox Foot Soup",
        link: "/",
      },
      {
        img: require("../img/main-product-sagol-large.png"),
        titleKor: "사골 대형 포장팩",
        titleEng: "Sagol Large Packing Pack",
        link: "/",
      },
    ];

    return (
      <React.Fragment>
        {productList.map((item, index) => (
          <S.ProductCard key={index} href={item.link} image={item.img}>
            <div className="product-img" />
            <h6>{item.titleKor}</h6>
            <p>{item.titleEng}</p>
          </S.ProductCard>
        ))}
      </React.Fragment>
    );
  };

  // render
  return (
    <main>
      <S.Banner className="mask">
        <h1>진국 1450℃의 비밀</h1>
        <h3>
          팔복진국은 1450℃의 화덕에서 <br />
          10시간 이상 끓여 진국의 깊은 맛을 냅니다.
        </h3>
      </S.Banner>

      <S.Section>
        <h4>COMPANY</h4>
        <h2>더 순수하게 더 푸짐하게 더 깨끗하게</h2>
        <CompanyCard />
      </S.Section>

      <S.ValueSection>
        <S.Container
          className="size-large row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className="title">
            <h4>VALUE</h4>
            <h2>팔복의 가치</h2>
          </div>

          <ValueCard />
        </S.Container>
      </S.ValueSection>

      <S.ProductSection className="mask">
        <h4>PRODUCT</h4>
        <h2>팔복의 제품군</h2>

        <div className="content">
          <ProductCard />
        </div>
      </S.ProductSection>
    </main>
  );
};

export default Main;
