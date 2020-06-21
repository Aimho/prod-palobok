import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  background: #323232;
  padding-top: 33px;
  padding-bottom: 50px;
  color: #e8e8e8;
`;

const Footer = () => (
  <StyledFooter>
    {/* <Grid
      container
      wrap={"wrap"}
      spacing={3}
      style={{ maxWidth: "1018px", margin: "auto" }}
    >
      <Grid item xs={6}>
        <img
          src={require("../img/brand-logo-white.png")}
          alt="팔복"
          width="83px"
          height="43px"
        />
      </Grid>
      <Grid
        item
        xs={6}
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <SiteMap />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="caption">
          (주)팔복(대표이사 : 한은경) <br />
          주소 : 경기도 양평군 강상면 신당곡2길 47 <br />
          사업자등록번호 : 132-81-36293 <br />
          통신판매신고 2014-경기양평-0150 <br />
          <br />
          copyright(C) 2015 팔복 all rights reserved
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Contact />
      </Grid>
    </Grid>
   */}
  </StyledFooter>
);

export default Footer;

/** SiteMap Link 스타일 */
const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  height: 20px;
  color: #fff;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 36px;
  }
`;

/** SiteMap 컴포넌트 */
const SiteMap = () => {
  const data = [
    { name: "회사소개", link: "/" },
    { name: "공지사항", link: "/" },
    { name: "고객문의", link: "/" },
    { name: "찾아오시는 길", link: "/" },
    { name: "쇼핑몰 바로가기", link: "/" },
  ];
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <StyledLink key={index} to={item.link}>
          {item.name}
        </StyledLink>
      ))}
    </React.Fragment>
  );
};

/** Contact 스타일 */
// const StyledContact = styled(Typography)`
//   font-size: 14px;
//   line-height: 24px;
//   span {
//     width: 64px;
//     display: inline-block;
//   }
// `;

/** Contact 컴포넌트 */
// const Contact = () => {
//   const data = [
//     { title: "TEL", detail: "1577-0688" },
//     { title: "FAX", detail: "02-488-6488" },
//     { title: "E-MAIL", detail: "palbok@palbok.com" },
//   ];
//   return (
//     <React.Fragment>
//       {data.map((item, index) => (
//         <StyledContact key={index} variant="body2">
//           <span>{item.title}</span>
//           {item.detail}
//         </StyledContact>
//       ))}
//     </React.Fragment>
//   );
// };
