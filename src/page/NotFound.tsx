import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Icon from "../icon";

const ErrorContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 0 15px;
  h1 {
    margin-top: 40px;
    margin-bottom: 60px;
    text-align: center;
    font-size: 40px;
    line-height: 60px;
    @media screen and (max-width: 768px) {
      word-break: keep-all;
      margin-top: 20px;
      margin-bottom: 30px;
      font-size: 32px;
      line-height: 46px;
    }
  }
  a {
    padding: 12px 24px;
    font-size: 20px;
    border: 1px solid #e8e8e8;
  }
`;

const NotFound = () => (
  <ErrorContainer>
    <Icon.Error className="icon" />
    <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
    <Link to="/">메인으로 돌아가기</Link>
  </ErrorContainer>
);

export default NotFound;
