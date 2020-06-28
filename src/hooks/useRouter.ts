import { useHistory, useParams, useLocation } from "react-router-dom";

/**
 * location search query를 object로 변환하는 함수
 * @param query
 */
export function searchQueryToObject(query: string) {
  const search = query.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

function useRouter() {
  const { push } = useHistory();
  const linkTo = (path: string) => push(path);

  const params: any = useParams();

  const { pathname, search } = useLocation();

  return {
    linkTo,
    params,
    pathname,
    search,
  };
}

export default useRouter;
