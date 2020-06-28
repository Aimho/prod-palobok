import React from "react";

import * as S from "./style";
import * as CommonStyle from "../style";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Story = () => {
  // data
  // Todo: 진국 스토리 리소스 넣어주시면 됩니다.
  const storyList = [
    require("../../img/brand-story-1.jpg"),
    require("../../img/brand-story-1.jpg"),
    require("../../img/brand-story-1.jpg"),
  ];

  const carouselSettings = {
    showArrows: true,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
  };

  return (
    <CommonStyle.SubTitleSection>
      <CommonStyle.Container>
        <h2>진국스토리</h2>
        <p className="sub-title">궁금하신 점이 있으시면 무엇이든 물어보세요.</p>
      </CommonStyle.Container>

      <S.StoryContent>
        <Carousel {...carouselSettings}>
          {storyList.map((item, index) => (
            <div key={index}>
              <img src={item} alt="진국 스토리" />
            </div>
          ))}
        </Carousel>
      </S.StoryContent>
    </CommonStyle.SubTitleSection>
  );
};

export default Story;
