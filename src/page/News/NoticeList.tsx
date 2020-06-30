import React, { useEffect, useState } from "react";

import { getNoticeList } from "../../api/newsApi";
import useRouter, { searchQueryToObject } from "../../utils/useRouter";

import * as E from "./element";
import * as CommonStyle from "../style";

interface NoticeList {
  id: number;
  number: number;
  title: string;
  writer: string;
  createdAt: string;
  view: number;
}

const NoticeList = () => {
  const { params, search } = useRouter();
  const [payload, setPayload] = useState([] as NoticeList[]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const query = search ? searchQueryToObject(search) : { page: 1 };

    getNoticeList(query.page ? query.page : 1).then((resp) => {
      if (resp && resp.data) {
        setPayload(resp.data.data);
        setTotalCount(resp.data.totalCount);
      }
    });
  }, [params, search]);

  const columns = [
    { label: "순번", key: "number" },
    { label: "제목", key: "title" },
    { label: "작성자", key: "writer" },
    { label: "작성일", key: "createdAt" },
    { label: "조회수", key: "view" },
  ];

  if (totalCount === 0 || !payload) {
    return (
      <CommonStyle.NotFoundData>공지사항이 없습니다.</CommonStyle.NotFoundData>
    );
  }

  return (
    <React.Fragment>
      <E.Table type="notice" columns={columns} dataSource={payload} />
      <E.Pagination totalCount={totalCount / 10} />
    </React.Fragment>
  );
};

export default NoticeList;
