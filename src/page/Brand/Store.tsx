import React, { useState } from "react";

import * as S from "./style";
import * as E from "./element";

const Store = () => {
  // data
  const tabList = ["강동점", "천안점"];
  // hooks
  const [target, setTarget] = useState(tabList[0]);

  const TabContent = () => {
    if (target === tabList[0]) {
      return (
        <S.StoreTab>
          <E.StoreGangDongTitle />
          <E.StoreGangDongInfo />
          <E.StoreGangDongMenus />
          <E.StoreGangDongPic />
          <E.StoreGangDongWayToCome />
        </S.StoreTab>
      );
    }
    if (target === tabList[1]) {
      return (
        <S.StoreTab>
          <E.StoreCheonanTitle />
          <E.StoreCheonanInfo />
          <E.StoreCheonanMenus />
          <E.StoreCheonanPic />
          <E.StoreCheonanWayToCome />
        </S.StoreTab>
      );
    }
    return null;
  };

  return (
    <S.Section>
      <S.Container>
        <h1>매장안내</h1>
        <E.TabNav tabList={tabList} target={target} setTarget={setTarget} />
        <TabContent />
      </S.Container>
    </S.Section>
  );
};

export default Store;
