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
  max-width: calc(1140px - 60px);
  margin: auto;
  position: relative;
  min-height: 157px;
  @media screen and (max-width: 768px) {
    margin: 0px auto;
    min-height: 200px;
    max-width: 340px;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    height: 34px;
    @media screen and (max-width: 768px) {
      height: 26px;
      top: 36px;
    }
  }
  .map {
    position: absolute;
    width: 472px;
    top: 0;
    right: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 12px;
      line-height: 18px;
      margin-top: 0px;
      margin-bottom: 5px;
    }
    a {
      color: #fff;
    }
  }
  .info {
    position: absolute;
    top: 57px;
    left: 0;
    font-size: 12px;
    line-height: 18px;
    color: #e8e8e8;
    word-break: keep-all;
    @media screen and (max-width: 768px) {
      top: 100px;
      right: 0;
      left: auto;
      width: 70%;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .contact {
    position: absolute;
    width: 472px;
    top: 57px;
    right: 0;
    font-size: 14px;
    line-height: 24px;
    color: #e8e8e8;
    @media screen and (max-width: 768px) {
      top: 36px;
      width: 70%;
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
