import initialState from "../store/initialState";
import * as actions from "./actions";

export const artistReducer = (state = initialState.artists, action) => {
  switch (action.type) {
    case "CAHNGE_ARTIST_URL":
      return { ...state, artist_url: action.url };
    case "CHANGE_NAME_LIST":
      return { ...state, name_lists: action.array };
    case "GET_ACCESS_TOKEN":
      return { ...state, access_token: action.token };
    case "GET_ARTIST":
      return { ...state, uri: action.uri };
    case "SEARCH_NAME":
      return { ...state, name: action.name };
    case "GET_ARTISTS_NAME":
      return { ...state, artist_name: action.data };
    default:
      return state;
  }
};
