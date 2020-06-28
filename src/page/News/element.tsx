import React from "react";
import { Link } from "react-router-dom";

import useRouter, { searchQueryToObject } from "../../hooks/useRouter";

import * as S from "./style";
import * as Icon from "../../icon";

interface PaginationProps {
  totalCount: number;
}
const Pagination = (props: PaginationProps) => {
  const { search } = useRouter();
  const pathname = "news/notice";

  const query = search ? searchQueryToObject(search) : { page: "1" };

  const toFirst = `/${pathname}?page=1`,
    toPrev = `/${pathname}?page=${query.page - 5 > 1 ? query.page - 5 : 1}`,
    toNext = `/${pathname}?page=${
      query.page + 5 < props.totalCount ? query.page + 5 : props.totalCount
    }`,
    toLast = `/${pathname}?page=${props.totalCount}`,
    toPage = (page: number) => `/${pathname}?page=${page}`;

  const currentMax = () => {
    const result = (Math.floor(query.page / 5) + 1) * 5;
    if (result < props.totalCount) return result;
    return props.totalCount;
  };
  const currentMin = () => {
    const result = currentMax() - 4;
    if (result > 1) return result;
    return 1;
  };

  const numberBtn = [];
  for (let i = currentMin(); i <= currentMax(); i++) {
    numberBtn.push(i);
  }

  return (
    <S.Pagination>
      <Link className="nav-btn visible-desktop" to={toFirst}>
        <Icon.ArrowDoubleBack />
      </Link>
      <Link className="nav-btn" to={toPrev}>
        <Icon.ArrowBack />
      </Link>
      {numberBtn.map((item, index) => (
        <Link
          key={index}
          className={String(item) === query.page ? "active" : ""}
          to={toPage(item)}
        >
          {item}
        </Link>
      ))}
      <Link className="nav-btn" to={toNext}>
        <Icon.ArrowForward />
      </Link>
      <Link className="nav-btn visible-desktop" to={toLast}>
        <Icon.ArrowDoubleForward />
      </Link>
    </S.Pagination>
  );
};

interface TableProps {
  columns: {
    label: string;
    key: string;
  }[];
  dataSource: any[];
}
const NoticeTable = (props: TableProps) => {
  const { linkTo } = useRouter();

  return (
    <S.NoticeTable>
      <thead>
        <tr>
          {props.columns.map((item) => (
            <th key={item.key}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((item) => (
          <tr key={item.id} onClick={() => linkTo(`/news/notice/${item.id}`)}>
            {props.columns.map((column, index) => {
              let label = item[column.key];
              if (column.key === "createdAt") {
                label = formatDate(new Date(label), "YYYY-MM-DD");
              }
              return (
                <td className={column.key} key={index}>
                  {label}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </S.NoticeTable>
  );
};

const ContactTable = NoticeTable;

export { NoticeTable, ContactTable, Pagination };

/**
 * Date를 원하는 포맷으로 변경해준다.
 * @param date 변환할 원본 데이터
 * @param format 원하는 포맷
 */
function formatDate(date: Date, format: string) {
  let year = date.getFullYear(),
    month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    hour = "" + date.getHours(),
    minutes = "" + date.getMinutes();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (hour.length < 2) hour = "0" + hour;
  if (minutes.length < 2) minutes = "0" + minutes;

  const result = format
    .replace("YYYY", String(year))
    .replace("MM", String(month))
    .replace("DD", String(day))
    .replace("HH", String(hour))
    .replace("mm", String(minutes));

  return result;
}
