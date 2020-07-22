export const USER_LOGIN = "USER_LOGIN";
export const user_login = (payload) => {
  return {
    type: "USER_LOGIN",
    payload,
  };
};

export const USER_FAIL_LOGIN = "USER_FAIL_LOGIN";
export const user_fail_login = () => {
  return {
    type: "USER_FAIL_LOGIN",
  };
};
