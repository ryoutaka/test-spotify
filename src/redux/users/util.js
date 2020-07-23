import axios from "axios";
import * as actions from "./actions";
export const sendLoginInfomation = (nickname, password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3002/user/login", {
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
  return (dispatch) => {
    axios
      .post("http://localhost:3002/user/post/artist", {
        data: { user_id, artist_name },
      })
      .then((res) => {
        if (res.data.length) {
          dispatch(actions.post_artist(res.data[0].artist_name));
        }
      });
  };
};
export const delete_favorite_artist = (user_id, artist_name) => {
  console.log("hh");
  return (dispatch) => {
    axios
      .delete("http://localhost:3002/user/delete/artist", {
        data: { user_id, artist_name },
      })
      .then((res) => {
        dispatch(actions.delete_artist(res.data));
      });
  };
};
