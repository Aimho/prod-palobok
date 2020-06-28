import React from "react";

import useRouter from "../../hooks/useRouter";

import Notice from "./Notice";
import Contact from "./Contact";

import * as S from "./style";
import * as CommonEle from "../element";

const News = () => {
  const { params, linkTo } = useRouter();

  const list = [
    { label: "HOME", link: "/" },
    { label: "공지사항", link: "/news/notice" },
    { label: "이벤트", link: "/news/event" },
    { label: "고객문의", link: "/news/contact" },
  ];

  const Content = () => {
    if (!params.type) {
      linkTo("/news/notice");
      return null;
    }

    if (params.type.toLowerCase() === "notice") return <Notice />;
    if (params.type.toLowerCase() === "event") return <Notice />;
    if (params.type.toLowerCase() === "contact") return <Contact />;

    // Todo 404 페이지
    linkTo("/brand/introduce");
    return null;
  };

  return (
    <main>
      <S.Banner className="mask">
        <h1>소식</h1>
      </S.Banner>
      <CommonEle.Snb list={list} />
      <Content />
    </main>
  );
};

export default News;
