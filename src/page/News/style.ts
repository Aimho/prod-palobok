import styled from "styled-components";
import * as CommonStyle from "../style";

const Banner = styled(CommonStyle.Banner)`
  background-image: url(${require("../../img/news-banner.jpg")});
`;

const ProductSubTitle = styled(CommonStyle.SubTitleContent)`
  margin: 0;
`;

const ProductCard = styled.div`
  display: flex;
  max-width: 760px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: block;
  }
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  img {
    width: 280px;
    height: 240px;
    margin-right: 60px;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-right: 0px;
    }
  }
  .info {
    position: relative;
    padding-top: 20px;
    padding-bottom: 10px;
    @media screen and (max-width: 768px) {
      padding-bottom: 0px;
    }
    .desc {
      margin: 20px 0;
      font-size: 14px;
      line-height: 20px;
    }
    a.market {
      @media screen and (max-width: 768px) {
        position: absolute;
        right: 0;
        top: 25px;
      }
    }
  }
`;

const PlantArticle = styled.article`
  padding-bottom: 20px;
`;

interface PlantSectionProps {
  backgroundColor: string;
}
const PlantSection = styled(CommonStyle.Section).attrs(
  (props: PlantSectionProps) => ({
    backgroundColor: props.backgroundColor || "#fff",
  })
)`
  padding-bottom: 60px;
  background-color: ${(props) => props.backgroundColor};
  h2.content-title {
    margin-top: 20px;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
    span {
      color: #b41118;
    }
  }
`;

const PlantInfo = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
  img {
    width: 440px;
    height: 280px;
    margin-right: 42px;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-right: 0;
    }
  }
  .info {
    padding-top: 20px;
    p {
      font-size: 16px;
      line-height: 24px;
      color: #474747;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      strong {
        display: inline-block;
        color: #000;
        font-size: 20px;
        line-height: 30px;
        width: 105px;
        @media screen and (max-width: 768px) {
          font-size: 16px;
          line-height: 24px;
          width: 84px;
        }
      }
    }
  }
`;

const PlantContainer = styled(CommonStyle.Container)`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const PlantSubTitle = styled(CommonStyle.SubTitleContent)`
  margin-top: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  span {
    color: #b41118;
  }
`;

const PlantAppointment = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .appointment-item {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    @media screen and (max-width: 768px) {
      width: 140px;
      height: 140px;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 12px;
    }
  }
`;

const PlantDesc = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 60px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 40px;
  }
`;

export {
  // 공통
  Banner,
  // 제품 page
  ProductSubTitle,
  ProductCard,
  // 플랜트 page
  PlantArticle,
  PlantSection,
  PlantInfo,
  PlantContainer,
  PlantSubTitle,
  PlantAppointment,
  PlantDesc,
};
