import styled from "styled-components";
import * as CommonStyle from "../style";

const Banner = styled(CommonStyle.Banner)`
  background-image: url(${require("../../img/news-banner.jpg")});
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
  thead {
    background: #f6f6f6;
    @media screen and (max-width: 768px) {
      tr {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 4px solid #e8e8e8;
      }
    }
    th {
      padding: 14px 10px;
      padding-bottom: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #666;
      border: 1px solid #e8e8e8;
      border-left: 0px;
      border-right: 0px;
      &:first-child {
        border-left: 1px solid #e8e8e8;
      }
      &:last-child {
        border-right: 1px solid #e8e8e8;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  tbody {
    @media screen and (max-width: 768px) {
      tr {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #e8e8e8;
        padding: 10px 0px;
      }
    }
    tr:hover {
      cursor: pointer;
      background: #e8e8e8;
    }
    td {
      padding: 20px 10px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #999;
      border-bottom: 1px solid #e8e8e8;
      &.title {
        font-size: 16px;
        line-height: 24px;
        text-align: left;
        color: #000;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }

  /** 공지사항, 고객문의 리스트 */
  &.notice tbody td,
  &.contact tbody td {
    @media screen and (max-width: 768px) {
      margin: 5px 10px;
      padding: 0px;
      border-bottom: 0px;
      font-size: 12px;
      line-height: 12px;
      &.writer {
        position: absolute;
        bottom: 10px;
        left: 70px;
        padding-left: 10px;
        border-left: 1px solid #e8e8e8;
      }
      &.number,
      &.view {
        display: none;
      }
    }
  }

  &.event {
    thead th.title {
      text-align: left;
    }
    tbody {
      tr {
        @media screen and (max-width: 768px) {
          justify-content: space-between;
        }
      }
      td {
        @media screen and (max-width: 768px) {
          margin: 5px 10px;
          padding: 0px;
          border-bottom: 0px;
          font-size: 12px;
          line-height: 12px;
          &.banner,
          &.banner img {
            width: 100%;
          }
        }
        span.inprogress {
          color: #b41118;
        }
      }
    }
  }
`;

const Pagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 60px auto;
  margin-bottom: 120px;
  @media screen and (max-width: 768px) {
    max-width: 250px;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  a {
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #666666;
    @media screen and (max-width: 768px) {
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-weight: normal;
      font-size: 12px;
    }
    &.nav-btn {
      background: #f6f6f6;
      border: 1px solid #e8e8e8;
      margin: 0 10px;
      &:first-child {
        margin-right: 0px;
        @media screen and (max-width: 768px) {
          margin-left: 0px;
          margin-right: 20px;
        }
      }
      &:last-child {
        margin-left: 0px;
        @media screen and (max-width: 768px) {
          margin-right: 0px;
          margin-left: 20px;
        }
      }
    }
    &.active {
      color: #fff;
      background: #b41118;
    }
  }
`;

const DescriptionContainer = styled.section`
  border-top: solid 1px #e8e8e8;
  @media screen and (max-width: 768px) {
    padding: 5px 0;
    border-top: solid 4px #e8e8e8;
    border-bottom: solid 1px #e8e8e8;
  }
`;

interface DescriptionItemProps {
  colspan: number;
}
const DescriptionItem = styled.div.attrs((props: DescriptionItemProps) => ({
  colspan: props.colspan || 1,
}))`
  display: inline-flex;
  flex-wrap: wrap;
  width: ${(props) => `calc(100% / ${props.colspan})`};
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.colspan === 1 ? "100%" : "auto")};
  }
  > * {
    padding: 16px 18px;
    border-bottom: solid 1px #e8e8e8;
    font-size: ${(props) => (props.colspan === 1 ? "16px" : "14px")};
    line-height: 24px;
    width: calc(100% - 120px);
    @media screen and (max-width: 768px) {
      padding: 5px 10px;
      width: 100%;
      font-size: ${(props) => (props.colspan === 1 ? "16px" : "12px")};
      color: ${(props) => (props.colspan === 1 ? "#000" : "#999")};
      border-bottom: 0px;
    }
    &.column {
      width: 120px;
      background: #f6f6f6;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const ContentSection = styled.section`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #e8e8e8;
  @media screen and (max-width: 768px) {
    padding: 0px;
    border: 0px;
  }
`;

const NavPost = styled.nav`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  @media screen and (max-width: 768px) {
    padding: 10px 24px;
  }
  .button {
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    margin-left: 30px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }
    &:hover {
      text-decoration: underline;
      color: #b41118;
    }
    &.disabled:hover {
      cursor: default;
      text-decoration: none;
      color: #000;
    }
  }
`;

const MoveToListBtn = styled.button`
  margin-top: 60px;
  padding: 12px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: #d4d4d4;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    padding: 10px 30px;
    width: 100%;
  }
`;

const ContactContainer = styled(CommonStyle.Container)`
  position: relative;
  a.button {
    position: absolute;
    right: 30px;
    top: 0;
    border: 1px solid #b41118;
    padding: 12px 30px;
    color: #b41118;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      position: relative;
      right: auto;
      padding: 10px 30px;
      font-size: 14px;
      margin-bottom: 30px;
      text-align: center;
    }
  }
`;

export {
  // 공통
  Banner,
  Table,
  Pagination,
  DescriptionContainer,
  DescriptionItem,
  ContentSection,
  NavPost,
  MoveToListBtn,
  // 고객문의 페이지
  ContactContainer,
};
