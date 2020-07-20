import React from "react";
import { useDispatch } from "react-redux";
import "../styles/style.css";

const Listitem = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() =>
          dispatch({ type: "CAHNGE_ARTIST_URL", url: props.artist_url })
        }
      >
        {props.name}
        {props.imageUrl ? <img src={props.imageUrl.url} alt="" /> : ""}
      </div>
    </>
  );
};

export default Listitem;
