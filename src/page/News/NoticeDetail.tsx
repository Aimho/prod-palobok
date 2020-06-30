import React, { useEffect, useState } from "react";

import { getNoticeDetail } from "../../api/newsApi";
import useRouter from "../../utils/useRouter";

import * as E from "./element";
import * as S from "./style";
import { formatDate } from "../../utils/format";

export interface Post {
  title: string;
  id: number;
}

interface NoticeDetail {
  id: number;
  title: string;
  writer: string;
  createdAt: string;
  view: number;
  content: any;
  nextPost?: Post;
  prevPost?: Post;
}

const NoticeDetail = () => {
  const { params, linkTo } = useRouter();
  const [payload, setPayload] = useState({} as NoticeDetail);
  console.log(payload);

  useEffect(() => {
    getNoticeDetail(params.id).then((resp) => {
      if (resp && resp.data) {
        setPayload(resp.data.data);
      }
    });
  }, [params]);

  if (Object.keys(payload).length === 0) return null;

  const dataSource = [
    { column: "글 제목", label: payload.title, colspan: 1 },
    { column: "작성자", label: payload.writer, colspan: 3 },
    {
      column: "작성일",
      label: formatDate(new Date(payload.createdAt), "YYYY-MM-DD"),
      colspan: 3,
    },
    { column: "조회수", label: payload.view, colspan: 3, hiddenMobile: true },
  ];

  function createNavPostProps(props?: Post) {
    if (!props) {
      return {
        title: undefined,
        link: undefined,
      };
    }
    return {
      title: props.title,
      link: `/news/notice/${props.id}`,
    };
  }

  return (
    <React.Fragment>
      <E.Description dataSource={dataSource} />

      <S.ContentSection></S.ContentSection>

      <E.NavPostBtn type="next" {...createNavPostProps(payload.nextPost)} />
      <E.NavPostBtn type="prev" {...createNavPostProps(payload.prevPost)} />

      <S.MoveToListBtn onClick={() => linkTo("/news/notice")}>
        목록으로
      </S.MoveToListBtn>
    </React.Fragment>
  );
};

export default NoticeDetail;
