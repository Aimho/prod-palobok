/**
 * Date를 원하는 포맷으로 변경해준다.
 * @param date 변환할 원본 데이터
 * @param format 원하는 포맷
 */
export function formatDate(date: Date, format: string) {
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
