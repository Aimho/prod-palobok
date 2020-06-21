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
    @media screen and (max-width: 768px) {
      display: block;
      padding: 0px 15px;
    }
  }
  &.size-large {
    max-width: 1280px;
  }
`;

interface PropImage {
  image?: string;
  textAlign?: string;
}

const CompanyCard = styled.div.attrs((props: PropImage) => ({
  image: props.image || "",
}))`
  position: relative;
  width: calc(33.333% - (40px / 3));
  height: 350px;
  padding: 20px 30px;
  ${(props) =>
    props.image &&
    `
      background: url(${props.image}) no-repeat;
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

const ValueSection = styled(Section)`
  background: url(${require("../img/main-value-banner.jpg")}) no-repeat;
  background-size: cover;
  background-position: center;
  .title {
    text-align: left;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .content {
    margin-left: auto;
    width: calc(100% - 300px);
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ValueCard = styled.div`
  width: calc(33.333% - (40px / 3));
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
  font-size: 32px;
  line-height: 46px;
  @media screen and (max-width: 768px) {
    padding-top: 22px;
    padding-bottom: 22px;
    width: calc(33.333% - (16px / 3));
    height: 120px;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ProductSection = styled(Section)`
  background: url(${require("../img/main-product-banner.jpg")}) no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    background-image: url(${require("../img/main-product-banner-mobile.jpg")});
    background-size: 100% 110px;
    background-position: top;
    padding-bottom: 0px;
  }
  h4,
  h2 {
    color: inherit;
    position: relative;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1280px;
    margin: auto;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 30px 15px;
      padding-bottom: 60px;
    }
  }
`;

const ProductCard = styled.a.attrs((props: PropImage) => ({
  image: props.image || "none",
}))`
  width: 20%;
  padding: 50px 34px;
  color: #000;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    width: calc(33.333% - 46px / 3);
    padding: 0px;
    &:nth-child(n + 4) {
      margin-top: 40px;
      width: calc(50% - 30px);
    }
  }
  &:hover {
    background-color: #eee;
    @media screen and (max-width: 768px) {
      background-color: #fff;
    }
  }
  &:not(:last-child) {
    border-right: 1px solid #d4d4d4;
    @media screen and (max-width: 768px) {
      border-right: 0px;
    }
  }
  .product-img {
    background: url(${(props) => props.image}) no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    min-height: 108px;
    margin-bottom: 36px;
    @media screen and (max-width: 768px) {
      min-height: 68px;
      height: 68px;
      margin-bottom: 26px;
    }
  }
  h6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #666666;
    font-weight: normal;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export {
  Banner,
  Section,
  Container,
  CompanyCard,
  ValueSection,
  ValueCard,
  ProductSection,
  ProductCard,
};
