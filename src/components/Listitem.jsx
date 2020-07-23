import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/style.css";
import Checkbox from "@material-ui/core/Checkbox";
import * as utils from "../redux/users/util";

const Listitem = (props) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(true);
  const id = useSelector((store) => store.users.user_id);
  const favoriteArtist = useSelector((store) => store.users.favoriteArtist);
  console.log(favoriteArtist);
  const favorite = (e) => {
    if (e.currentTarget.checked) {
      dispatch(utils.post_favorite_artist(id, props.name));
    } else {
      dispatch(utils.delete_favorite_artist(id, props.name));
    }
  };

  return (
    <>
      <div
        onClick={() => {
          dispatch({ type: "CAHNGE_ARTIST_URL", url: props.artist_url });
        }}
      >
        {props.name}
        {props.imageUrl ? <img src={props.imageUrl.url} alt="" /> : ""}
        <Checkbox
          onChange={(e) => favorite(e)}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
    </>
  );
};

export default Listitem;
