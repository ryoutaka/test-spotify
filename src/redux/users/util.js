import axios from "axios";
import * as actions from "./actions";
export const sendLoginInfomation = (nickname, password) => {
  return (dispatch) => {
    axios
      .post("/user/login", {
        data: { nickname, password },
      })
      .then((res) => {
        if (res.data.length) {
          const { nickname, id } = res.data[0];
          localStorage.setItem("loginFlag", "true");
          localStorage.setItem("user_id", String(id));
          localStorage.setItem("nickName", nickname);
          dispatch(actions.user_login(nickname, id));
        } else {
          dispatch(actions.user_fail_login());
        }
      });
  };
};
export const post_favorite_artist = (user_id, artist_name) => {
  axios.post("/user/post/artist", {
    data: { user_id, artist_name },
  });
};
export const delete_favorite_artist = (user_id, artist_name) => {
  axios.delete("/user/delete/artist", {
    data: { user_id, artist_name },
  });
};
export const get_user_favorite = (user_id) => {
  return (dispatch) => {
    axios.post("/user/favorite/artist", { data: { user_id } }).then((res) => {
      dispatch(actions.get_favorite_artist(res.data));
    });
  };
};
export const sign_up = (nickname, password) => {
  return (dispatch) => {
    axios
      .post("/user/signup", { data: { nickname, password } })
      .then((result) => {
        if (result.data === 1) {
          dispatch(actions.sign_up_error("passwordは6文字以上です"));
        } else if (result.data === 2) {
          dispatch(actions.sign_up_error("このnicknameは既に登録されています"));
        } else if (result.data === 3) {
          dispatch(actions.sign_up_error("このpasswordは既に登録されています"));
        } else {
          console.log(result.data);
          const { nickname, id } = result.data[0];
          dispatch(actions.user_login(nickname, id));
        }
      });
  };
};
