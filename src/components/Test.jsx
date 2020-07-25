import React from "react";
import { useSearch } from "react-spotify-api";

const Index = (props) => {
  const { name } = props;
  const { data } = useSearch(name, {
    artist: true,
    limit: 1,
  });
  if (data) {
    console.log(data.artists.items[0]);
  }

  return (
    <>
      {data ? (
        <div>
          <h3>{data.artists.items[0].name}</h3>
          <img src={data.artists.items[0].images[1].url}></img>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Index;
