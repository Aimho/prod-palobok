import styled from "styled-components";

const Banner = styled.section`
  padding: 115px 0px;
  background: url(${require("../../img/brand-banner.jpg")}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    padding: 43px 0px;
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

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  h1 {
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
  h1 {
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
interface PropsTabNav {
  itemWidthPer: number;
}

const TabNav = styled.div.attrs((props: PropsTabNav) => ({
  itemWidthPer: props.itemWidthPer || 0,
}))`
  display: flex;
  border: 1px solid #e8e8e8;
  margin-bottom: 60px;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  .tab-nav {
    width: ${(props) => `${props.itemWidthPer}%`};
    text-align: center;
    padding: 16px 0px;
    background-color: #f6f6f6;
    color: #666666;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    @media screen and (max-width: 768px) {
      padding: 10px 0px;
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
    }
    &.active {
      color: #fff;
      background-color: #b41118;
    }
    :not(:last-child) {
      border-right: 1px solid #e8e8e8;
    }
  }
`;

const TabContent = styled.div`
  text-align: center;

  h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 58px;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    span {
      color: #b41118;
    }
  }
`;

const GreetingTab = styled(TabContent)`
  .desc {
    max-width: 867px;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 100px;
    text-align: left;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    @media screen and (max-width: 768px) {
      padding-top: 20px;
      padding-bottom: 40px;
      font-size: 14px;
      line-height: 20px;
    }
    span {
      color: #b41118;
    }
  }

  img.brand-mental {
    max-width: 593px;
    margin: auto;
    @media screen and (max-width: 768px) {
      max-width: 343px;
    }
  }
`;

const HistoryTab = styled(TabContent)`
  margin: 0 -23px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  h2 {
    @media screen and (max-width: 768px) {
      max-width: 192px;
      margin: auto;
      margin-bottom: 40px;
    }
  }
`;

const SecretTab = styled(TabContent)`
  margin: 0 -23px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const StoryContent = styled.div`
  max-width: 1140px;
  margin: auto;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
  .carousel .slide {
    background: #fff;
  }
  .carousel .control-next.control-arrow:before {
    border-left: solid 20px #000;
    @media screen and (max-width: 768px) {
      border-left: solid 10px #000;
    }
  }
  .carousel .control-prev.control-arrow:before {
    border-right: solid 20px #000;
    @media screen and (max-width: 768px) {
      border-right: solid 10px #000;
    }
  }
  .carousel.carousel-slider .control-arrow {
    padding: 20px;
    @media screen and (max-width: 768px) {
      padding: 10px;
    }
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before,
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    border-top-width: 20px;
    border-bottom-width: 20px;
    @media screen and (max-width: 768px) {
      border-top-width: 10px;
      border-bottom-width: 10px;
    }
  }
`;

export {
  Banner,
  Container,
  Snb,
  Section,
  SubTitleSection,
  TabNav,
  TabContent,
  GreetingTab,
  HistoryTab,
  SecretTab,
  StoryContent,
};
