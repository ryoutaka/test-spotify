import React from "react";
import PlayWidget from "react-spotify-widgets";
import { useSelector } from "react-redux";
import Search from "./Search";
import MyPage from "./MyPage";
import styled from "styled-components";

const Widget = styled.div`
  width: 300px;
  height: 380px;
  margin: 0 auto;
`;

const Main = () => {
  const artist_url = useSelector((store) => store.artists.artist_url);

  return (
    <>
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

      <MyPage />
    </>
  );
};

export default Main;
