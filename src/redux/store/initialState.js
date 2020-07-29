const initial = {
  users: {
    user_id: 0,
    nickName: "",
    loginFlag: false,
    favoriteArtist: [],
    errorMsg: "",
    signUpErrorMsg: "",
  },
  artists: {
    access_token: "",
    name: "",
    uri: "",
    name_lists: [{ name: "", images: ["", "", { imageUrl: "" }] }],
    artist_name: "",
    artist_url: "",
  },
};

export default initial;
