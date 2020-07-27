import React from "react";
import Lists from "./Lists";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "react-spotify-api";

const useStyles = makeStyles({
  root: {
    marginBottom: "20px",
    width: "400px",
  },
});

const HeadBox = styled.div`
  text-align: center;
  color: palevioletred;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
`;

const Text = styled.p`
  margin-bottom: 20px;
`;

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const name_lists = useSelector((store) => store.artists.name_lists);
  const artistName = useSelector((store) => store.artists.artist_name);
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
      <HeadBox>
        <Title>アーティストを検索してください</Title>
        <Text>
          検索したアーティストの画像をclickするとShortバージョンのアルバムが聴けます
        </Text>
        <TextField
          size="small"
          className={classes.root}
          id="standard-basic"
          onChange={(e) => search(e)}
        />
      </HeadBox>

      {artistName.length ? <Lists name_lists={name_lists} /> : ""}
    </>
  );
};

export default Search;
