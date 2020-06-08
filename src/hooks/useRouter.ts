import { useHistory } from "react-router-dom";

function useRouter() {
  const { push } = useHistory();
  const linkTo = (path: string) => push(path);
  return {
    linkTo,
  };
}

export default useRouter;
