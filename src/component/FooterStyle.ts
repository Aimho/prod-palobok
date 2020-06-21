import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background: #323232;
  padding-top: 33px;
  padding-bottom: 50px;
  color: #e8e8e8;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 30px;
  }
`;

const Container = styled.section`
  max-width: 1140px;
  margin: auto;

  display: grid;
  grid-template-columns:
    [logo-start info-start] repeat(6, 1fr)
    [logo-end info-end map-start contact-start] repeat(6, 1fr)
    [map-end contact-end];
  grid-template-rows:
    [logo-start map-start] auto [logo-end map-end] auto
    [info-start contact-start] auto [info-end contact-end];
  grid-column-gap: 18px;
  grid-row-gap: 23px;
  @media screen and (max-width: 768px) {
    padding: 0px 15px;
    grid-template-columns:
      [map-start logo-start] repeat(4, 1fr)
      [logo-end contact-start info-start] repeat(9, 1fr)
      [logo-end contact-end info-end];
    grid-template-rows:
      [map-start] auto [map-end logo-start contact-start] auto
      [logo-end contact-end info-start] auto [info-end];
    grid-column-gap: 14px;
    grid-row-gap: 14px;
  }

  .logo {
    grid-area: logo;
    height: 34px;
    @media screen and (max-width: 768px) {
      height: 26px;
    }
  }
  .map {
    grid-area: map;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 18px;
      margin-top: 0px;
      margin-bottom: 5px;
    }
    a {
      color: #fff;
      & + a {
        margin-left: 36px;
        @media screen and (max-width: 768px) {
          margin-left: 14px;
        }
      }
    }
  }
  .info {
    grid-area: info;
    font-size: 12px;
    line-height: 18px;
    color: #e8e8e8;
    word-break: keep-all;
  }
  .contact {
    grid-area: contact;
    font-size: 14px;
    line-height: 24px;
    color: #e8e8e8;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 18px;
    }
    span {
      width: 52px;
      display: inline-block;
      @media screen and (max-width: 768px) {
        width: 48px;
      }
    }
  }
`;

export { Footer, Container };
