import React from "react";

import useRouter from "../../utils/useRouter";

import Introduce from "./Introduce";
import Story from "./Story";
import Store from "./Store";

import * as S from "./style";
import * as CommonEle from "../element";

const Brand = () => {
  const { params, linkTo } = useRouter();

  const list = [
    { label: "HOME", link: "/" },
    { label: "회사소개", link: "/brand/introduce" },
    { label: "진국스토리", link: "/brand/story" },
    { label: "매장안내", link: "/brand/store" },
  ];

  const Content = () => {
    if (!params.type) {
      linkTo("/brand/introduce");
      return null;
    }

    if (params.type.toLowerCase() === "introduce") return <Introduce />;
    if (params.type.toLowerCase() === "story") return <Story />;
    if (params.type.toLowerCase() === "store") return <Store />;

    linkTo("/notfound");
    return null;
  };

  return (
    <main>
      <S.Banner className="mask">
        <h1>팔복</h1>
      </S.Banner>
      <CommonEle.Snb list={list} />
      <Content />
    </main>
  );
};

export default Brand;
