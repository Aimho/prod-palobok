import styled from "styled-components";

import * as CommonStyle from "../style";

const Banner = styled(CommonStyle.Banner)`
  background-image: url(${require("../../img/brand-banner.jpg")});
`;

const SlideCard = styled.div`
  border: solid 1px #d4d4d4;
  img {
    width: 100%;
    height: 490px;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      height: 200px;
    }
  }
  nav {
    padding: 22px 40px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      padding: 12px;
    }
    button {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      }
      span.label {
        margin: 0 12px;
        @media screen and (max-width: 768px) {
          margin: 0 6px;
        }
      }
    }
  }
`;

interface PropsTabNav {
  itemWidthPer: number;
}
const TabNav = styled.section.attrs((props: PropsTabNav) => ({
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

const TabContent = styled.article`
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

const StoreTab = styled(TabContent)`
  h2 {
    font-size: 32px;
    line-height: 46px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 12px;
    }
  }
  p {
    font-size: 16px;
    line-height: 24px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const StoreInfo = styled.section`
  margin-top: 60px;
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    display: block;
  }
  img.store-pic {
    width: 440px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .detail {
    margin-left: 42px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: url(${require("../../img/brand-blue-ribbon.png")}) no-repeat;
    background-size: 120px 40px;
    background-position: right top;
    @media screen and (max-width: 768px) {
      margin-left: 0;
      padding: 20px 24px;
      width: 100%;
      height: 235px;
      background-image: url(${require("../../img/brand-blue-ribbon-mobile.png")});
      background-size: 50px 90px;
      background-position: right calc(100% - 20px);
    }
    p {
      width: 100%;
      color: #474747;
      text-align: left;
      display: flex;
      align-items: center;
    }
    span.title {
      display: inline-block;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      min-width: 104px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        min-width: 84px;
      }
    }
  }
`;

const StoreSection = styled.section`
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StoreMenu = styled(StoreSection)`
  .menu-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
    .menu-item {
      display: inline-flex;
      align-items: center;
      width: calc(50% - 30px);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      @media screen and (max-width: 768px) {
        width: calc(100%);
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
      &:nth-child(n + 3) {
        margin-top: 20px;
      }
      hr {
        width: calc(100% - 222px);
        display: inline-block;
        border-style: dashed;
        margin: 0 8px;
      }
      span {
        color: #474747;
        font-weight: normal;
      }
    }
  }
`;

const StorePic = styled(StoreSection)`
  .img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  img {
    display: inline-block;
    object-fit: cover;
    width: calc(50% - 10px);
    height: 320px;
    @media screen and (max-width: 768px) {
      width: calc(50% - 3px);
      height: 112px;
    }
    &:nth-child(n + 3) {
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        margin-top: 6px;
      }
    }
  }
`;

const StoreWayToCome = styled(StoreSection)`
  .method {
    display: flex;
    margin-top: 40px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    @media screen and (max-width: 768px) {
      margin-top: 20px;
      font-size: 16px;
      line-height: 24px;
      > div {
        max-width: calc(100% - 28px);
      }
    }
    .icon {
      margin-right: 8px;
    }
    span {
      display: block;
      margin-top: 12px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #474747;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    span.subway {
      position: relative;
      padding-left: 72px;
      @media screen and (max-width: 768px) {
        padding-left: 68px;
      }
      &:last-child {
        margin-top: 20px;
      }
      .chip {
        margin-top: 0;
        position: absolute;
        top: center;
        left: 0;
        color: #fff;
        font-weight: bold;
        padding: 2px 8px;
        border-radius: 5px;
      }
    }
  }
`;

export {
  // 공통
  Banner,
  SlideCard,
  TabNav,
  TabContent,
  // 회사소개 페이지
  GreetingTab,
  HistoryTab,
  SecretTab,
  // 진국 스토리 페이지
  StoryContent,
  // 매장안내 페이지
  StoreTab,
  StoreInfo,
  StoreMenu,
  StorePic,
  StoreWayToCome,
};
