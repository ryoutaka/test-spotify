import React, { useEffect } from "react";
import { SpotifyApiContext } from "react-spotify-api";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import axios from "axios";
import Main from "./Main";

const another = () => {
  return (dispatch) => {
    axios({
      method: "post",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(
            "e314f11063df4d81bb5dea866c6d2c20" +
              ":" +
              "f2e461cba76c4220a5c5b840044dfb75"
          ).toString("base64"),
      },
      url: "https://accounts.spotify.com/api/token",
      data: qs.stringify({ grant_type: "client_credentials" }),
    }).then((res) => {
      dispatch({ type: "GET_ACCESS_TOKEN", token: res.data.access_token });
    });
  };
};

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(another());
  // }, []);
  // const loginFlag = useSelector((store) => store.users.loginFlag);
  // const token = useSelector((store) => store.artists.access_token);
  return (
    <>
      <div>
        {/* <SpotifyApiContext.Provider value={token}> */}
        <Main />
        {/* </SpotifyApiContext.Provider> */}
      </div>
    </>
  );
}

export default App;
