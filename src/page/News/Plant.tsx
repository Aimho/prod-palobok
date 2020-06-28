import React from "react";

import * as S from "./style";
import * as E from "./element";
import * as CommonStyle from "../style";

const Plant = () => {
  return (
    <S.PlantArticle>
      <S.PlantSection>
        <CommonStyle.Container>
          <h2>진국 플랜트</h2>
          <h2 className="content-title">
            팔복의 모든 제품은 물 맑고 공기 좋은{" "}
            <br className="visible-mobile" />
            <span>양평 진국 플랜트</span>
            에서 제조됩니다.
          </h2>
          <E.PlantInfo />
        </CommonStyle.Container>
      </S.PlantSection>

      <S.PlantSection backgroundColor={"#F6F6F6"}>
        <S.PlantContainer>
          <S.PlantSubTitle>
            진국 플랜트는 <span>약속</span>합니다
          </S.PlantSubTitle>
          <E.PlantAppointment />
        </S.PlantContainer>
      </S.PlantSection>

      <S.PlantSection>
        <S.PlantContainer>
          <S.PlantSubTitle>
            OEM 제품과 비교불가한 <span>직접 생산</span>
          </S.PlantSubTitle>
          <S.PlantDesc>
            <p>
              팔복의 사골진국과 도가니, 우족은 OEM, ODM 생산이 아닌 양평에
              위치한 진국플랜트에서 직접 생산되어 집니다. 실패와 경험에서 터득한
              오직 팔복만이 보유한 최상의 방식으로 최고의 사골진국을 매일
              생산합니다.
            </p>
            <br />
            <p>
              또한, 팔복사골진국은 직영매장 및 인터넷으로만 판매되고 있으며 보다
              더 나은 맛을 위해 진국플랜트 연구소를 통한 끊임없는 연구개발과
              품질개선을 위해 최선을 다하고 있습니다. 시중 기성품 및
              생산자주문방식(OEM) 업체의 제품들과 팔복 사골진국의 비교를
              거부합니다.
            </p>
          </S.PlantDesc>
          <img
            src={require("../../img/product-plant-desc.jpg")}
            alt="직접생산"
            className="full-width visible-desktop"
          />
          <img
            src={require("../../img/product-plant-desc-mobile.jpg")}
            alt="직접생산"
            className="full-width visible-mobile"
          />
        </S.PlantContainer>
      </S.PlantSection>
    </S.PlantArticle>
  );
};

export default Plant;
