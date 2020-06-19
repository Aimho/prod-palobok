import styled from "styled-components";

import { Box } from "@material-ui/core";

interface PropBackgroundImage {
  backgroundImage?: string;
  mask?: boolean;
  textAlign?: string;
}

const StyledMaskBox = styled(Box).attrs((props: PropBackgroundImage) => ({
  backgroundImage: props.backgroundImage || "none",
  textAlign: props.textAlign || "center",
  mask: props.mask || false,
}))`
  ${(props) =>
    props.mask
      ? `
        position: relative;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          background-color: rgba(0, 0, 0, 0.3);
        }
        * {
          position: relative;
        }
      `
      : ""}
`;

const StyledMainBox = styled(StyledMaskBox)`
  padding-top: 184px;
  padding-bottom: 240px;
  text-align: center;
  background: url(${require("../img/main-banner.jpg")}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  color: #fff;
  .title {
    position: relative;
    margin-bottom: 16px;
  }
  .desc {
    position: relative;
  }
`;

const StyledContentBox = styled(StyledMaskBox).attrs(
  (props: PropBackgroundImage) => ({
    backgroundImage: props.backgroundImage || "none",
    textAlign: props.textAlign || "center",
  })
)`
  padding-top: 100px;
  padding-bottom: 120px;
  text-align: ${(props) => props.textAlign};
  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: cover;
  background-position: center;
  .sub-title {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const StyledCompanyCard = styled.div.attrs((props: PropBackgroundImage) => ({
  backgroundImage: props.backgroundImage || "none",
}))`
  position: relative;
  width: 326px;
  height: 350px;
  padding: 20px 30px;
  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: cover;
  background-position: center;
  text-align: left;
  color: #fff;
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
  }
  .MuiTypography-root {
    position: relative;
    margin-bottom: 12px;
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
  StyledMainBox,
  StyledContentBox,
  StyledCompanyCard,
  StyledValueCard,
  StyledProductCard,
};
