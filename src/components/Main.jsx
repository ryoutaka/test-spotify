import React from "react";
import PlayWidget from "react-spotify-widgets";
import { useSelector } from "react-redux";
import Search from "./Search";

import styled from "styled-components";

import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

const Widget = styled.div`
  width: 300px;
  height: 380px;
  margin: 0 auto;
`;

const Main = () => {
  const artist_url = useSelector((store) => store.artists.artist_url);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
            <div style={{ marginBottom: 100 }} />
            <Widget>
              <PlayWidget
                width={300}
                height={380}
                uri={artist_url}
                lightTheme={true}
              />
            </Widget>
          </Route>
          {/* <Route exact path={`${path}/acount`} component={MyPage} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Main;
