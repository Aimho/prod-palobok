import axios from "axios";

export async function getNoticeList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`/data/noticeList.json`, {
    params: {
      page: m_page,
    },
  });
}

export async function getNoticeDetail(id: number) {
  return await axios.get(`/data/noticeDetail.json`);
}

export async function getContactList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`/data/contactList.json`, {
    params: {
      page: m_page,
    },
  });
}
export async function getEventList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`/data/eventList.json`, {
    params: {
      page: m_page,
    },
  });
}
