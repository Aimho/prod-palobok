import axios from "axios";

const baseUrl = "https://www.palbok.com/api";

export async function getNoticeList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`${baseUrl}/getNoticeList.php?page=${m_page}`);
}

export async function getNoticeDetail(id: number) {
  return await axios.get(`${baseUrl}/getNoticeDetail.php?id=${id}`);
}

export async function getEventList(page?: number) {
  const m_page = page ? page : 1;
  return await axios.get(`${baseUrl}/getEventList.php?page=${m_page}`);
}

export async function getEventDetail(id: number) {
  return await axios.get(`${baseUrl}/getEventDetail.php?id=${id}`);
}
