import React from "react";
import { Link } from "react-router-dom";

import useRouter, { searchQueryToObject } from "../../utils/useRouter";

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
  type: "notice" | "contact" | "event";
  columns: {
    label: string;
    key: string;
  }[];
  dataSource: any[];
}
const Table = (props: TableProps) => {
  const { linkTo } = useRouter();

  return (
    <S.Table className={props.type}>
      <thead>
        <tr>
          {props.columns.map((item) => (
            <th className={item.key} key={item.key}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((item) => (
          <tr
            key={item.id}
            onClick={() => linkTo(`/news/${props.type}/${item.id}`)}
          >
            {props.columns.map((column, index) => {
              return (
                <td className={column.key} key={index}>
                  {item[column.key]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

export interface DescriptionProps {
  dataSource: {
    column: string;
    label: string | number;
    colspan: number;
    hiddenMobile?: boolean;
  }[];
}
const Description = (props: DescriptionProps) => {
  return (
    <S.DescriptionContainer>
      {props.dataSource.map((item, index) => (
        <S.DescriptionItem
          className={item.hiddenMobile ? "visible-desktop" : ""}
          colspan={item.colspan}
          key={index}
        >
          <span className="column">{item.column}</span>
          <span>{item.label}</span>
        </S.DescriptionItem>
      ))}
    </S.DescriptionContainer>
  );
};

interface NavPostBtnProps {
  type: "next" | "prev";
  title?: string;
  link?: string;
}
const NavPostBtn = (props: NavPostBtnProps) => {
  const icon =
    props.type === "next" ? <Icon.ExpandLess /> : <Icon.ExpandMore />;
  const typeLabel = props.type === "next" ? "다음 글" : "이전 글";
  const Button = () => {
    if (!props.title || !props.link)
      return <span className="button disabled">{typeLabel}이 없습니다.</span>;
    return (
      <Link className="button" to={props.link}>
        {props.title}
      </Link>
    );
  };

  return (
    <S.NavPost>
      {typeLabel} {icon}
      <Button />
    </S.NavPost>
  );
};

export { Table, Pagination, Description, NavPostBtn };
