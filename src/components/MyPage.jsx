import react, { useEffect } from "React";
import { useSelector } from "react-redux";
import { get_user_favorite } from "../redux/users/util";

const Index = () => {
  const user_id = useSelector((store) => store.users.user_id);
  useEffect(() => {
    get_user_favorite(user_id)();
  }, []);
  return <></>;
};

export default Index;
