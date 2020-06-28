import axios from "axios";

// Todo: query page에 따라 data 10개 씩만 불러올 수 있도록 해주세요
export async function getNoticeList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`/data/noticeList.json`, {
    params: {
      m_page,
    },
  });
}

export async function getContactList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`/data/contactList.json`, {
    params: {
      m_page,
    },
  });
}
