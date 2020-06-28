import React from "react";

import * as E from "./element";
import * as CommonStyle from "../style";

const List = () => {
  const productList = [
    {
      src: require("../../img/product-list-1.jpg"),
      subtitle: "사골진국",
      desc: (
        <React.Fragment>
          청정 양평의 맑은 공기, 맑은 지하수와 친환경 자연방목으로 자란{" "}
          <br className="visible-desktop" />
          소의 뼈가 만나 최고의 사골진국을 선물합니다.{" "}
          <br className="visible-desktop" />
          진정한 사골육수 맛을 위해 단 1g의 첨가물 없이 사고로가 도가니,{" "}
          <br className="visible-desktop" />
          우족만으로 12시간 동안 전통적인 직화방식으로 푹 고아냈습니다.{" "}
          <br className="visible-desktop" />
          정직하고 순수하게 만든 진짜 진국을 만나보세요.
        </React.Fragment>
      ),
      link: "https://www.palbok.com/good/list.php?cate=jin",
    },
    {
      src: require("../../img/product-list-2.jpg"),
      subtitle: "도가니탕",
      desc: (
        <React.Fragment>
          팔복도가니는 뼈가 없는 도가니 고기로만 구성되어 있습니다.{" "}
          <br className="visible-desktop" />
          힘줄과 전혀 다른 식감과 풍부한 영양소(단백질, 콜라겐 등)가 함유된{" "}
          <br className="visible-desktop" />
          팔복의 100% 무릎도가니를 경험해 보세요.
        </React.Fragment>
      ),
      link: "https://www.palbok.com/good/list.php?cate=do",
    },
    {
      src: require("../../img/product-list-3.jpg"),
      subtitle: "설렁탕",
      desc: (
        <React.Fragment>
          친환경 자연방목한 100% 소고기.
          <br />
          입에 착 달라붙는 감칠맛, 구수함, 개운한 맛을 내려면 재료가 좋아야{" "}
          <br className="visible-desktop" />
          합니다. <br className="visible-desktop" />
          팔복 설렁탕고기는 도가니 위에 붙어 있는 사태를 사용하여 고기의{" "}
          <br className="visible-desktop" />
          결이 곱고 풍미가 좋으며 육단백질의 농도가 높아 소고기의 육향이{" "}
          <br className="visible-desktop" />
          진하여 담백하고 쫄깃하여 씹는 맛이 좋습니다.
        </React.Fragment>
      ),
      link: "https://www.palbok.com/good/list.php?cate=sel",
    },
    {
      src: require("../../img/product-list-4.jpg"),
      subtitle: "우족탕",
      desc: (
        <React.Fragment>
          임금님 수라상에 진상되던 대표 보양식, 소의 기운이 모여있는 우족.{" "}
          <br className="visible-desktop" />
          한의학적으로 인삼과 대추, 생강을 우족과 함께 끓이면 빈혈증상 완화에{" "}
          <br className="visible-desktop" />
          도움이 됩니다. <br className="visible-desktop" />
          신체 저항력이 크게 떨어진 노인 분들과 출산 후 산모에게 특히 좋으며{" "}
          <br className="visible-desktop" />
          유즙 분비에 도움을 주어 모유 수유에도 좋습니다.
        </React.Fragment>
      ),
      link: "https://www.palbok.com/good/list.php?cate=woo",
    },
    {
      src: require("../../img/product-list-5.jpg"),
      subtitle: "사골 대형 포장팩",
      desc: (
        <React.Fragment>
          팔복진국과 동일한 품질의 진국을 합리적인 가격에 공급해 드립니다.{" "}
          <br className="visible-desktop" />
          국내최초 유럽형 Bag in Box 포장방식으로 위생 및 관리가 편리합니다.{" "}
          <br className="visible-desktop" />
          직화로 끓이므로 최소 3~4일 전에 주문하시길 부탁드립니다.{" "}
          <br className="visible-desktop" />
          여러 음식점에서 팔복진국을 비법육수로 사용하고 있습니다.
        </React.Fragment>
      ),
    },
  ];

  return (
    <CommonStyle.SubTitleSection>
      <CommonStyle.Container>
        <h2>제품</h2>
        <p className="sub-title">팔복의 모든 제품들을 소개합니다.</p>

        {productList.map((item, index) => (
          <E.ProductCard {...item} key={index} />
        ))}
      </CommonStyle.Container>
    </CommonStyle.SubTitleSection>
  );
};

export default List;
