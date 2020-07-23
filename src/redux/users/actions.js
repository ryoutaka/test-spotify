export const USER_LOGIN = "USER_LOGIN";
export const user_login = (nickName, id) => {
  return {
    type: "USER_LOGIN",
    nickName,
    id,
  };
};

export const USER_FAIL_LOGIN = "USER_FAIL_LOGIN";
export const user_fail_login = () => {
  return {
    type: "USER_FAIL_LOGIN",
  };
};

export const POST_ARTIST = "POST_ARTIST";
export const post_artist = (artist_name) => {
  return {
    type: "POST_ARTIST",
    artist_name,
  };
};
export const DELETE_ARTIST = "DELETE_ARTIST";
export const delete_artist = (artist_name) => {
  return {
    type: "DELETE_ARTIST",
    artist_name,
  };
};
