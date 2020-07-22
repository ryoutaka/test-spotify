import axios from "axios";
const sendLoginInfomation = (nickname, password) => {
  return (dispatch) => {
    axios.post("/user/login", { data: { nickname, password } }).then((res) => {
      console.log(res);
    });
  };
};
