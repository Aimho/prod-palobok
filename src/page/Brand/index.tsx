import React from "react";

import useRouter from "../../hooks/useRouter";

import Introduce from "./Introduce";
import Story from "./Story";
import Store from "./Store";

import * as E from "./element";
import * as S from "./style";

const Brand = () => {
  const { params, linkTo } = useRouter();

  const Snb = () => {
    const list = [
      { label: "HOME", link: "/" },
      { label: "회사소개", link: "/brand/introduce" },
      { label: "진국스토리", link: "/brand/story" },
      { label: "매장안내", link: "/brand/store" },
    ];
    return <E.Snb list={list} />;
  };

  const Content = () => {
    if (!params.type) {
      linkTo("/brand/introduce");
      return null;
    }

    if (params.type.toLowerCase() === "introduce") return <Introduce />;
    if (params.type.toLowerCase() === "story") return <Story />;
    if (params.type.toLowerCase() === "store") return <Store />;

    // Todo 404 페이지
    linkTo("/brand/introduce");
    return null;
  };

  return (
    <main>
      <S.Banner>팔복</S.Banner>
      <Snb />
      <Content />
    </main>
  );
};

export default Brand;
