import { useHistory, useParams, useLocation } from "react-router-dom";

function useRouter() {
  const { push } = useHistory();
  const linkTo = (path: string) => push(path);

  const params: any = useParams();

  const { pathname } = useLocation();

  return {
    linkTo,
    params,
    pathname,
  };
}

export default useRouter;
