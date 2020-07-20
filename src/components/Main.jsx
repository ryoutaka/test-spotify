import React, { useRef, useEffect } from "react";
import PlayWidget from "react-spotify-widgets";
import { useSearch } from "react-spotify-api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import jsonpAdapter from "axios-jsonp";

const Main = () => {
  const dispatch = useDispatch();

  const name = useSelector((store) => store.name);
  const artist_url = useSelector((store) => store.artist_url);

  const { data } = useSearch(name, {
    artist: true,
    limit: 2,
  });

  if (data) {
    dispatch({ type: "GET_ARTIST", uri: data.artists.items[0].uri });
  }

  return (
    <>
      <Search />
      <div style={{ marginBottom: 100 }} />
      <PlayWidget width={300} height={380} uri={artist_url} lightTheme={true} />
    </>
  );
};

export default Main;
