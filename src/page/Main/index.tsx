import React from "react";

import * as S from "./style";
import * as E from "./element";

const Main = () => {
  return (
    <main>
      <S.Banner className="mask">
        <h1>진국 1450℃의 비밀</h1>
        <h3>
          팔복진국은 1450℃의 화덕에서 <br />
          10시간 이상 끓여 진국의 깊은 맛을 냅니다.
        </h3>
      </S.Banner>

      <S.Section>
        <h4>COMPANY</h4>
        <h2>더 순수하게 더 푸짐하게 더 깨끗하게</h2>
        <E.CompanyCard />
      </S.Section>

      <S.ValueSection>
        <S.Container
          className="size-large row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className="title">
            <h4>VALUE</h4>
            <h2>팔복의 가치</h2>
          </div>

          <E.ValueCard />
        </S.Container>
      </S.ValueSection>

      <S.ProductSection className="mask">
        <h4>PRODUCT</h4>
        <h2>팔복의 제품군</h2>

        <div className="content">
          <E.ProductCard />
        </div>
      </S.ProductSection>
    </main>
  );
};

export default Main;
