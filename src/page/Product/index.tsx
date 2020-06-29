import React from "react";

import useRouter from "../../utils/useRouter";

import List from "./List";
import Plant from "./Plant";

import * as S from "./style";
import * as CommonEle from "../element";

const Product = () => {
  const { params, linkTo } = useRouter();

  const list = [
    { label: "HOME", link: "/" },
    { label: "제품", link: "/product/list" },
    { label: "진국 플랜트", link: "/product/plant" },
  ];

  const Content = () => {
    if (!params.type) {
      linkTo("/product/list");
      return null;
    }

    if (params.type.toLowerCase() === "list") return <List />;
    if (params.type.toLowerCase() === "plant") return <Plant />;

    linkTo("/notfound");
    return null;
  };

  return (
    <main>
      <S.Banner className="mask">
        <h1>제품</h1>
      </S.Banner>
      <CommonEle.Snb list={list} />
      <Content />
    </main>
  );
};

export default Product;
