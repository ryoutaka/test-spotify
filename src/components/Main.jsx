import React, { useRef } from "react";
import PlayWidget from "react-spotify-widgets";
import { useSearch } from "react-spotify-api";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";

// const get = (token) => {
//   return (disptach) => {
//     axios({
//       method: "get",
//       url: "https://api.spotify.com/v1/artists/1O8CSXsPwEqxcoBE360PPO",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     }).then((res) => {
//       console.log(res);
//       disptach({ type: "GET_ARTIST", uri: res.data.uri });
//     });
//   };
// };

const Main = () => {
  const input = useRef(null);

  const dispatch = useDispatch();
  const uri = useSelector((store) => store.uri);
  const name = useSelector((store) => store.name);

  const { data } = useSearch(name, {
    artist: true,
    limit: 2,
  });

  if (data) {
    dispatch({ type: "GET_ARTIST", uri: data.artists.items[0].uri });
  }

  const getText = () => {
    const text = input.current.value;
    dispatch({ type: "SEARCH_NAME", name: text });
  };

  return (
    <>
      <Search />
      <div style={{ marginBottom: 100 }} />
      <PlayWidget width={300} height={380} uri={uri} lightTheme={true} />
      <input type="text" ref={input} />
      <button
        onClick={() => {
          getText();
        }}
      >
        search
      </button>
    </>
  );
};

export default Main;
