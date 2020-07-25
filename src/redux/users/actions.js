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

export const GET_FAVORITE_ARTIST = "GET_FAVORITE_ARTIST";
export const get_favorite_artist = (data) => {
  return {
    type: "GET_FAVORITE_ARTIST",
    data,
  };
};
