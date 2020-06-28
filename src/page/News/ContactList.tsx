import React from "react";

import * as E from "./element";
import * as CommonStyle from "../style";

interface ContactListProps {
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

const ContactList = (props: ContactListProps) => {
  const columns = [
    { label: "순번", key: "number" },
    { label: "제목", key: "title" },
    { label: "작성자", key: "writer" },
    { label: "작성일", key: "createdAt" },
    { label: "조회수", key: "view" },
  ];

  if (props.totalCount === 0) {
    return (
      <CommonStyle.NotFoundData>고객문의가 없습니다.</CommonStyle.NotFoundData>
    );
  }

  return (
    <React.Fragment>
      <E.ContactTable columns={columns} dataSource={props.payload} />
      <E.Pagination totalCount={props.totalCount / 10} />
    </React.Fragment>
  );
};

export default ContactList;
