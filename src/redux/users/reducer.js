import initialState from "../store/initialState";
import * as actions from "./actions";

export const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actions.POST_ARTIST:
      return {
        ...state,
        favoriteArtist: [...state.favoriteArtist, action.artist_name],
      };
    case actions.DELETE_ARTIST:
      const result = state.favoriteArtist.reduce((array, artist) => {
        if (action.artist_name === artist) {
          return array;
        } else {
          console.log(action.artist_name);
          array.push(artist);
          return array;
        }
      }, []);

      return { ...state, favoriteArtist: result };
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
