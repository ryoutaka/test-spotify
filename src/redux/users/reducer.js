import initialState from "../store/initialState";
import * as actions from "./actions";

export const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actions.GET_FAVORITE_ARTIST:
      console.log(action.data);
      return { ...state, favoriteArtist: action.data };
    case actions.USER_LOGIN:
      return {
        ...state,
        nickName: action.nickName,
        loginFlag: true,
        id: action.id,
      };
    default:
      return state;
  }
};
