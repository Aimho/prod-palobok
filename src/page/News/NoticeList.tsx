import React from "react";

import * as E from "./element";
import * as CommonStyle from "../style";

interface NoticeListProps {
  totalCount: number;
  payload: {
    id: number;
    number: number;
    title: string;
    writer: string;
    createdAt: string;
    view: number;
  }[];
}

const NoticeList = (props: NoticeListProps) => {
  const columns = [
    { label: "순번", key: "number" },
    { label: "제목", key: "title" },
    { label: "작성자", key: "writer" },
    { label: "작성일", key: "createdAt" },
    { label: "조회수", key: "view" },
  ];

  if (props.totalCount === 0 || !props.payload) {
    return (
      <CommonStyle.NotFoundData>공지사항이 없습니다.</CommonStyle.NotFoundData>
    );
  }

  return (
    <React.Fragment>
      <E.Table type="notice" columns={columns} dataSource={props.payload} />
      <E.Pagination totalCount={props.totalCount / 10} />
    </React.Fragment>
  );
};

export default NoticeList;
