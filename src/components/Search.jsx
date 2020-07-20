import React from "react";
import Lists from "./Lists";

import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "react-spotify-api";

const Search = () => {
  const dispatch = useDispatch();
  const name_lists = useSelector((store) => store.name_lists);
  const artistName = useSelector((store) => store.artist_name);
  const { data } = useSearch(artistName, {
    artist: true,
    limit: 8,
  });

  if (data) {
    dispatch({ type: "CHANGE_NAME_LIST", array: data.artists.items });
  }

  const search = (e) => {
    const name = e.target.value;
    dispatch({ type: "GET_ARTISTS_NAME", data: name });
  };

  return (
    <>
      <input onChange={(e) => search(e)} />
      {artistName.length ? <Lists name_lists={name_lists} /> : ""}
    </>
  );
};

export default Search;
