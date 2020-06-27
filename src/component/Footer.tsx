import React from "react";

import * as S from "./FooterStyle";

const Footer = () => {
  // components
  const Sitemap = () => {
    const sitemapList = [
      { label: "회사소개", link: "/", target: "_self" },
      { label: "공지사항", link: "/", target: "_self" },
      { label: "고객문의", link: "/", target: "_self" },
      { label: "찾아오시는 길", link: "/", target: "_self" },
      {
        label: "쇼핑몰 바로가기",
        link: "https://www.palbok.com",
        target: "_blank",
      },
    ];
    return (
      <div className="map">
        {sitemapList.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={item.target}
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  const Info = () => {
    const infoList = [
      "(주)팔복(대표이사 : 한은경)",
      "주소 : 경기도 양평군 강상면 신당곡2길 47",
      "사업자등록번호 : 132-81-36293 통신판매신고 2014-경기양평-0150",
    ];
    return (
      <address className="info">
        {infoList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <p style={{ marginTop: "14px", whiteSpace: "nowrap" }}>
          copyright(C) 2015 팔복 all rights reserved
        </p>
      </address>
    );
  };

  const Contact = () => {
    const contactList = [
      { title: "TEL", content: "1577-0688" },
      { title: "FAX", content: "02-488-6488" },
      { title: "E-MAIL", content: "palbok@palbok.com" },
    ];
    return (
      <address className="contact">
        {contactList.map((item, index) => (
          <p key={index}>
            <span>{item.title}</span> {item.content}
          </p>
        ))}
      </address>
    );
  };

  // render
  return (
    <S.Footer>
      <S.Container>
        <img
          src={require("../img/brand-logo-white.png")}
          alt="팔복"
          className="logo"
        />
        <Sitemap />
        <Info />
        <Contact />
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
