import React from "react";

import { formatDate } from "../../utils/format";

import * as E from "./element";
import * as CommonStyle from "../style";

interface EventListProps {
  totalCount: number;
  payload: {
    id: number;
    banner: string;
    title: string;
    termStart: string;
    termEnd: string;
    status: "inprogress" | "end";
  }[];
}

const EventList = (props: EventListProps) => {
  const columns = [
    { label: "이벤트", key: "banner" },
    { label: "제목", key: "title" },
    { label: "기간", key: "term" },
    { label: "분류", key: "status" },
  ];

  if (props.totalCount === 0 || !props.payload) {
    return (
      <CommonStyle.NotFoundData>이벤트가 없습니다.</CommonStyle.NotFoundData>
    );
  }

  const dataSource = props.payload.map((item) => ({
    ...item,
    banner: <img src={item.banner} alt="" />,
    term: `${formatDate(new Date(item.termStart), "YYYY-MM-DD")} ~ ${formatDate(
      new Date(item.termEnd),
      "YYYY-MM-DD"
    )}`,
    status: (
      <span className={item.status}>
        <strong>
          {item.status === "end" ? "이벤트 종료" : "• 이벤트 진행중"}
        </strong>
      </span>
    ),
  }));

  return (
    <React.Fragment>
      <E.Table type="event" columns={columns} dataSource={dataSource} />
      <E.Pagination totalCount={props.totalCount / 10} />
    </React.Fragment>
  );
};

export default EventList;
