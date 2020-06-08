/**
 * 해당 배열에서 원하는 [key]값과 동일한 값들만 리턴함
 * @param array
 * @param key
 * @param value
 * @return array
 */
export function filterSameValue(array: any[], key: string, value: any): any[] {
  return array.filter((item) => item[key] === value);
}
