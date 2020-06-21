import { useHistory, useParams } from "react-router-dom";

function useRouter() {
  const { push } = useHistory();
  const linkTo = (path: string) => push(path);

  const params: any = useParams();

  return {
    linkTo,
    params,
  };
}

export default useRouter;
