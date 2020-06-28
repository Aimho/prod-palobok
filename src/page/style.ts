import styled from "styled-components";

const Banner = styled.section`
  padding: 115px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 43px 0px;
  }
  h1 {
    color: #ffffff;
    position: relative;
    font-weight: bold;
    font-size: 48px;
    line-height: 70px;
    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

const Snb = styled.nav`
  border-bottom: 1px solid #e8e8e8;
  .btn-group {
    max-width: 1140px;
    padding: 0 30px;
    margin: auto;
    display: flex;
    @media screen and (max-width: 768px) {
      padding: 0px;
    }
  }
  a {
    color: #000;
    padding: 18px 0px;
    width: 142px;
    border-left: 1px solid #e8e8e8;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    @media screen and (max-width: 768px) {
      padding: 11px 0px;
      width: 25%;
      font-size: 12px;
      line-height: 18px;
    }
    &:last-child {
      border-right: 1px solid #e8e8e8;
    }
    &.active {
      color: #b41118;
      border-bottom: 4px solid #b41118;
      @media screen and (max-width: 768px) {
        border-bottom: 2px solid #b41118;
      }
    }
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  padding: 0 30px;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 46px;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
`;

const SubTitleSection = styled(Section)`
  h2 {
    margin-bottom: 15px;
    @media screen and (max-width: 768px) {
      margin-bottom: 4px;
    }
  }
  p.sub-title {
    font-size: 16px;
    line-height: 24px;
    color: #474747;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 20px;
    }
  }
`;

const SubTitleContent = styled.h4`
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 8px;
  border-bottom: solid 2px #b41118;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export { Banner, Snb, Container, Section, SubTitleSection, SubTitleContent };
