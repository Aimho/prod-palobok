import React from "react";

import { Container, Typography, Grid } from "@material-ui/core";

import {
  StyledMainBox,
  StyledContentBox,
  StyledCompanyCard,
  StyledValueCard,
  StyledProductCard,
} from "./MainStyle";

const Main = () => {
  return (
    <main>
      <StyledMainBox mask={true}>
        <Typography className="title" variant="h3">
          <b>진국 1450℃의 비밀</b>
        </Typography>
        <Typography className="desc" variant="h5" component="span">
          <strong>
            팔복진국은 1450℃의 화덕에서 <br /> 10시간 이상 끓여 진국의 깊은 맛을
            냅니다.
          </strong>
        </Typography>
      </StyledMainBox>

      <StyledContentBox>
        <Typography variant="h6" color="primary">
          COMPANY
        </Typography>
        <Typography variant="h4" className="sub-title">
          <strong>더 순수하게 더 푸짐하게 더 깨끗하게</strong>
        </Typography>

        <Container maxWidth={"lg"}>
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <StyledCompanyCard
                backgroundImage={require("../img/main-company-card-1.jpg")}
              >
                <Typography variant="h4">
                  <b>since 1992</b>
                </Typography>
                <Typography variant="body2">
                  1992년 종로구 청진동에로 설렁탕 가게로 <br />
                  시작해 대한민국 최초로 사골진국팩 생산
                </Typography>
              </StyledCompanyCard>
            </Grid>

            <Grid item>
              <StyledCompanyCard
                backgroundImage={require("../img/main-company-card-2.jpg")}
              >
                <Typography variant="h4">
                  <b>Business</b>
                </Typography>
                <Typography variant="body2">
                  가정에서는 간편하게 먹는 든든한 한 끼, <br />
                  식당 및 단체 급식소에는 대량 공급 가능
                </Typography>
              </StyledCompanyCard>
            </Grid>

            <Grid item>
              <StyledCompanyCard
                backgroundImage={require("../img/main-company-card-3.jpg")}
              >
                <Typography variant="h4">
                  <b>400만팩 돌파</b>
                </Typography>
                <Typography variant="body2">
                  진국, 도가니 포장상품 <br />
                  4,000,000팩 판매 돌파
                </Typography>
              </StyledCompanyCard>
            </Grid>
          </Grid>
        </Container>
      </StyledContentBox>

      <StyledContentBox
        backgroundImage={require("../img/main-value-banner.jpg")}
        textAlign={"left"}
      >
        <Container maxWidth={"lg"}>
          <Grid container justify="center" spacing={3}>
            <Grid item sm={3}>
              <Typography variant="h6" color="primary">
                VALUE
              </Typography>
              <Typography variant="h4" className="sub-title">
                <strong>팔복의 가치</strong>
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <StyledValueCard>
                <svg
                  width="70"
                  height="120"
                  viewBox="0 0 70 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70 33.67C70 54.49 51.25 68.57 51.25 85H41.29C41.295 74.605 46.27 65.87 51.13 57.435C55.695 49.51 60 42.02 60 33.67C60 18.13 47.41 10 34.98 10C22.57 10 10 18.13 10 33.67C10 42.02 14.305 49.51 18.87 57.435C23.73 65.87 28.7 74.605 28.705 85H18.75C18.75 68.57 0 54.485 0 33.67C0 11.955 17.49 0 34.98 0C52.49 0 70 11.97 70 33.67ZM50 92.5C50 93.88 48.88 95 47.5 95H22.5C21.12 95 20 93.88 20 92.5C20 91.12 21.12 90 22.5 90H47.5C48.88 90 50 91.12 50 92.5ZM50 102.5C50 103.88 48.88 105 47.5 105H22.5C21.12 105 20 103.88 20 102.5C20 101.12 21.12 100 22.5 100H47.5C48.88 100 50 101.12 50 102.5ZM41.495 118.295C40.545 119.375 39.17 120 37.735 120H32.265C30.83 120 29.455 119.375 28.505 118.295L21.25 110H48.75L41.495 118.295ZM51.56 24.46C49.115 25.895 47.29 28.025 46.26 31.02C43.48 39.065 48.125 45.66 45.085 53.18C43.31 57.555 39.565 59.83 35.64 60.23C34.89 67.985 35.935 78.74 38.365 84.995H32.8C29.895 73.385 31.46 52.79 37.925 41.175C33.99 44.19 30.105 52.445 28.975 59.01C15.285 50.8 25.68 24.46 51.56 24.46Z"
                    fill="#999999"
                  />
                </svg>
                <Typography variant="h4">
                  <strong>정직</strong>
                </Typography>
              </StyledValueCard>
            </Grid>
            <Grid item sm={3}>
              <StyledValueCard>
                <svg
                  width="120"
                  height="110"
                  viewBox="0 0 120 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60 41.1446C61.17 35.5446 67.735 9.99961 86.91 9.99961C98.01 9.99961 110 17.7546 110 35.0146C110 54.5496 91.865 77.3646 60 98.1596C28.135 77.3646 10 54.5496 10 35.0146C10 17.5946 21.845 9.98961 32.885 9.98961C52.5 9.98961 58.61 35.6196 60 41.1446ZM0 35.0146C0 55.3546 15.3 82.4196 60 110C104.7 82.4196 120 55.3546 120 35.0146C120 -4.79538 71.76 -10.1254 60 16.3296C48.31 -9.98039 0 -5.02038 0 35.0146Z"
                    fill="#999999"
                  />
                </svg>

                <Typography variant="h4">
                  <strong>나눔</strong>
                </Typography>
              </StyledValueCard>
            </Grid>
            <Grid item sm={3}>
              <StyledValueCard>
                <svg
                  width="120"
                  height="90"
                  viewBox="0 0 120 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M97.615 10.875C90.63 10.875 85.94 8.405 78.175 4.32C73.915 2.09 70.495 0 65.585 0C59.21 0 56.85 3.29 52.825 7.82C42.565 -0.145 35.26 3.285 28.785 6.355C25 8.145 21.09 10 15.85 10H0V49.55C5.365 50.06 10.005 50.395 16.435 51.87C12.49 59.025 16.72 67.655 24.605 68.98C26.225 72.355 29.46 74.775 33.195 75.41C34.755 78.675 37.905 81.165 41.74 81.805C44.46 87.54 51.55 90.125 57.68 87.155C59.85 88.945 62.605 90 65.515 90C69.975 90 74.2 87.585 76.24 83.315C79.98 82.53 83.03 80.075 84.56 76.835C88.1 76.1 91.18 73.815 92.8 70.405C99.73 68.995 104.26 61.77 101.24 54.515C106.72 51.815 112.345 50.715 120 49.015V9.685C115.195 9.98 102.465 10.775 97.615 10.875ZM24.02 60.8C22.135 59.38 21.9 56.66 23.505 54.75L27.415 49.955C29.02 48.035 31.85 47.63 33.74 49.06C35.64 50.485 35.86 53.19 34.26 55.115L30.35 59.895C28.745 61.82 25.915 62.215 24.02 60.8ZM32.59 67.21C30.7 65.78 30.425 63.13 32.035 61.21L35.985 56.365C37.59 54.45 40.42 54.045 42.31 55.46C44.2 56.885 44.435 59.6 42.825 61.51L38.875 66.355C37.27 68.28 34.49 68.64 32.59 67.21ZM41.16 73.63C39.27 72.205 39.03 69.49 40.645 67.565L44.545 62.785C46.15 60.865 48.98 60.45 50.875 61.875C52.76 63.305 52.995 66.01 51.39 67.93L47.485 72.72C45.88 74.645 43.04 75.045 41.16 73.63ZM59.96 74.33L56.045 79.145C54.43 81.075 51.605 81.47 49.715 80.05C47.825 78.625 47.595 75.92 49.195 74L53.12 69.18C54.73 67.27 57.56 66.86 59.445 68.29C61.345 69.7 61.575 72.415 59.96 74.33ZM68.17 81.44C67.4 82.035 66.465 82.325 65.515 82.325C64.83 82.325 64.15 82.15 63.51 81.85L65.78 79.055C66.775 77.88 67.515 76.49 67.98 75.005L68.6 75.555C70.2 77.39 69.995 80.01 68.17 81.44ZM93.01 62.09C91.17 63.51 88.39 63.165 86.81 61.36L74.33 50.655C73.295 49.77 71.975 51.335 73 52.205L85.165 62.65C86.76 64.48 86.555 67.115 84.725 68.525C82.88 69.96 80.095 69.62 78.515 67.795L68.94 59.405C67.92 58.51 66.57 60.055 67.585 60.95L76.925 69.16C78.52 70.985 78.285 73.56 76.44 74.99C74.62 76.4 71.885 76.145 70.285 74.305L68.46 72.68C69.125 66.38 64.725 61.08 58.84 60.1C57.21 56.68 53.965 54.315 50.28 53.7C48.67 50.31 45.445 47.915 41.72 47.29C38.485 40.495 29.58 38.55 23.48 43.405C19.475 42.205 15.04 41.22 10 40.54V20H15.85C23.34 20 28.735 17.445 33.065 15.39C38.5 12.815 41.11 11.62 45.97 15.16C42.77 18.34 39.5 21.14 36.135 23.105C33.19 24.82 31.875 28.095 32.775 31.445C33.955 35.815 39.085 40.235 46.61 40.235C56.515 40.235 61.285 34.255 66.285 31.405C73.75 38.585 85.935 49.625 93.635 56.535C94.965 58.345 94.745 60.745 93.01 62.09ZM110 41.005C105.44 42.08 100.995 43.35 96.465 45.635C91.04 40.74 78.82 29.67 74.47 25.32C69.51 20.365 64.5 19.89 59.005 24.335C55.055 27.515 48.915 31.57 44.15 29.83C50.975 25.045 57.11 18.08 62.61 11.85C64.175 10.08 65.245 8.89 70.12 11.4L73.51 13.175C82.135 17.715 88.86 21.31 99.17 20.85C102.27 20.725 106.605 20.495 110 20.3V41.005Z"
                    fill="#999999"
                  />
                </svg>

                <Typography variant="h4">
                  <strong>감사</strong>
                </Typography>
              </StyledValueCard>
            </Grid>
          </Grid>
        </Container>
      </StyledContentBox>

      <StyledContentBox
        backgroundImage={require("../img/main-product-banner.jpg")}
        mask={true}
      >
        <Container maxWidth={"lg"} style={{ color: "#fff" }}>
          <Typography variant="h6">PRODUCT</Typography>
          <Typography variant="h4" className="sub-title">
            <strong>팔복의 제품군</strong>
          </Typography>

          <Grid container justify="center">
            <StyledProductCard
              backgroundImage={require("../img/main-product-sagol.png")}
            >
              <div className="product-img" />
              <Typography variant="h6">사골진국</Typography>
              <Typography variant="body2" className="desc">
                Sagol Jinguk
              </Typography>
            </StyledProductCard>
            <StyledProductCard
              backgroundImage={require("../img/../img/main-product-dogani.png")}
            >
              <div className="product-img" />
              <Typography variant="h6">도가니탕</Typography>
              <Typography variant="body2" className="desc">
                Dogani-Tang
              </Typography>
            </StyledProductCard>
            <StyledProductCard
              backgroundImage={require("../img/main-product-seolleong.png")}
            >
              <div className="product-img" />
              <Typography variant="h6">설렁탕</Typography>
              <Typography variant="body2" className="desc">
                Seolleong-Tang
              </Typography>
            </StyledProductCard>
            <StyledProductCard
              backgroundImage={require("../img/main-product-ox.png")}
            >
              <div className="product-img" />
              <Typography variant="h6">우족탕</Typography>
              <Typography variant="body2" className="desc">
                Ox Foot Soup
              </Typography>
            </StyledProductCard>
            <StyledProductCard
              backgroundImage={require("../img/main-product-sagol-large.png")}
            >
              <div className="product-img" />
              <Typography variant="h6">사골 대형 포장팩</Typography>
              <Typography variant="body2" className="desc">
                Sagol Large Packing Pack
              </Typography>
            </StyledProductCard>
          </Grid>
        </Container>
      </StyledContentBox>
    </main>
  );
};

export default Main;
