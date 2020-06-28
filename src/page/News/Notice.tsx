import React, { useEffect, useState } from "react";

import useRouter from "../../hooks/useRouter";

import * as E from "./element";
import * as CommonStyle from "../style";

const Notice = () => {
  const { params, linkTo } = useRouter();
  const [payload, setPayload] = useState([]);

  return (
    <CommonStyle.SubTitleSection>
      <CommonStyle.Container>
        <h2>공지사항</h2>
        <p className="sub-title">
          팔복의 다양한 안내사항을 신속히 알려드립니다.
        </p>
      </CommonStyle.Container>
    </CommonStyle.SubTitleSection>
  );
};

export default Notice;
