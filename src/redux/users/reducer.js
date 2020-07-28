import initialState from "../store/initialState";
import * as actions from "./actions";

export const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actions.LOG_OUT:
      return {
        user_id: 0,
        nickName: "",
        loginFlag: false,
        favoriteArtist: [],
      };
    case actions.GET_FAVORITE_ARTIST:
      console.log(action.data);
      return { ...state, favoriteArtist: action.data };
    case actions.USER_LOGIN:
      console.log(action.id);
      return {
        ...state,
        nickName: action.nickName,
        loginFlag: true,
        user_id: Number(action.id),
      };
    default:
      return state;
  }
};
