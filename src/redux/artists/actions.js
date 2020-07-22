export const CAHNGE_ARTIST_URL = "CAHNGE_ARTIST_URL";
export const change_artist_url = (url) => {
  return {
    type: "CAHNGE_ARTIST_URL",
    url,
  };
};
export const CHANGE_NAME_LIST = "CHANGE_NAME_LIST";
export const change_name_list = (array) => {
  return {
    type: "CHANGE_NAME_LIST",
    array,
  };
};

export const GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN";
export const get_access_token = (token) => {
  return {
    type: "GET_ACCESS_TOKEN",
    token,
  };
};

export const GET_ARTIST = "GET_ARTIST";
export const get_artist = (uri) => {
  return {
    type: "GET_ARTIST",
    uri,
  };
};

export const SEARCH_NAME = "SEARCH_NAME";
export const search_name = (name) => {
  return {
    type: "SEARCH_NAME",
    name,
  };
};

export const GET_ARTISTS_NAME = "GET_ARTISTS_NAME";
export const get_artists_name = (data) => {
  return {
    type: "GET_ARTISTS_NAME",
    data,
  };
};
