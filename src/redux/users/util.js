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
          dispatch(actions.user_login(nickname, id));
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
      console.log(res);
      dispatch(actions.get_favorite_artist(res.data));
    });
  };
};
