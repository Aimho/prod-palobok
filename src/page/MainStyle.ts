import styled from "styled-components";

const Banner = styled.section`
  padding-top: 184px;
  padding-bottom: 240px;
  text-align: center;
  background: url(${require("../img/main-banner.jpg")}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 70px;
  }

  h1 {
    position: relative;
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 70px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  h3 {
    position: relative;
    font-size: 24px;
    line-height: 35px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 120px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-top: 34px;
    padding-bottom: 40px;
  }
  h4 {
    font-size: 20px;
    line-height: 30px;
    color: #b41118;
    font-weight: inherit;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
  h2 {
    font-size: 40px;
    line-height: 58px;
    font-weight: inherit;
    margin-bottom: 40px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  &.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: block;
      padding: 0px 15px;
    }
  }
  &.size-large {
    max-width: 1280px;
  }
`;

interface PropBackgroundImage {
  backgroundImage?: string;
  textAlign?: string;
}

const CompanyCard = styled.div.attrs((props: PropBackgroundImage) => ({
  backgroundImage: props.backgroundImage || "",
}))`
  position: relative;
  width: calc(33.333% - (40px / 3));
  height: 350px;
  padding: 20px 30px;
  ${(props) =>
    props.backgroundImage &&
    `
      background: url(${props.backgroundImage}) no-repeat;
      background-size: cover;
      background-position: center;
    `}
  text-align: left;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 145px;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.27951) 41.84%,
      rgba(0, 0, 0, 0) 100%
    );
    @media screen and (max-width: 768px) {
      background: linear-gradient(
        180deg,
        #000000 0%,
        rgba(0, 0, 0, 0.27951) 41.84%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }

  p {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }
    &.title {
      font-size: 32px;
      line-height: 46px;
      font-weight: bold;
      margin-bottom: 12px;
      @media screen and (max-width: 768px) {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`;

const StyledValueCard = styled.div`
  width: 280px;
  height: 360px;
  padding-top: 80px;
  padding-bottom: 70px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledProductCard = styled.a.attrs((props: PropBackgroundImage) => ({
  backgroundImage: props.backgroundImage || "none",
}))`
  width: 20%;
  padding: 50px 34px;
  color: #000;
  background-color: #fff;
  &:not(:last-child) {
    border-right: 1px solid #d4d4d4;
  }
  .product-img {
    background: url(${(props) => props.backgroundImage}) no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    min-height: 108px;
    margin-bottom: 36px;
  }
  .desc {
    margin-top: 4px;
    color: #666;
  }
`;

export {
  Banner,
  Section,
  Container,
  CompanyCard,
  StyledValueCard,
  StyledProductCard,
};
