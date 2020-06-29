import React from "react";

import { formatDate } from "../../utils/format";

import * as E from "./element";
import * as CommonStyle from "../style";

interface ContactListProps {
  totalCount: number;
  payload: {
    id: number;
    number: number;
    category: string;
    title: string;
    writer: string;
    createdAt: string;
    view: number;
  }[];
}

const ContactList = (props: ContactListProps) => {
  const columns = [
    { label: "순번", key: "number" },
    { label: "제목", key: "title" },
    { label: "작성자", key: "writer" },
    { label: "작성일", key: "createdAt" },
    { label: "조회수", key: "view" },
  ];

  if (props.totalCount === 0 || !props.payload) {
    return (
      <CommonStyle.NotFoundData>고객문의가 없습니다.</CommonStyle.NotFoundData>
    );
  }

  const dataSource = props.payload.map((item) => ({
    ...item,
    title: `[${item.category}] ${item.title}`,
    createdAt: formatDate(new Date(item.createdAt), "YYYY-MM-DD"),
  }));

  return (
    <React.Fragment>
      <E.Table type="contact" columns={columns} dataSource={dataSource} />
      <E.Pagination totalCount={props.totalCount / 10} />
    </React.Fragment>
  );
};

export default ContactList;
