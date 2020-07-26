import React, { useEffect } from "react";

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import AfterLogin from "./AfterLogin";
import { SpotifyApiContext } from "react-spotify-api";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import axios from "axios";
import Main from "./Main";
import NavBar from "./NavBar";
import MyPage from "./MyPage";

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

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(another());
  }, []);
  const token = useSelector((store) => store.artists.access_token);
  return (
    <>
      <SpotifyApiContext.Provider value={token}>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={AfterLogin} />
            <Router exact path="/acount">
              <MyPage />
            </Router>
          </Switch>
        </div>
      </SpotifyApiContext.Provider>
    </>
  );
};

export default Index;
