import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const initial = {
  access_token: "",
  name: "",
  uri: "",
  name_lists: [{ name: "", images: ["", "", { imageUrl: "" }] }],
  artist_name: "",
  artist_url: "",
};

const reducer = (store = initial, action) => {
  switch (action.type) {
    case "CAHNGE_ARTIST_URL":
      return { ...store, artist_url: action.url };
    case "CHANGE_NAME_LIST":
      return { ...store, name_lists: action.array };
    case "GET_ACCESS_TOKEN":
      return { ...store, access_token: action.token };
    case "GET_ARTIST":
      return { ...store, uri: action.uri };
    case "SEARCH_NAME":
      return { ...store, name: action.name };
    case "GET_ARTISTS_NAME":
      return { ...store, artist_name: action.data };
    default:
      return store;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
