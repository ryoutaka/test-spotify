import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import * as utils from "../redux/users/util";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import styled from "styled-components";

const Listitem = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((store) => store.users.user_id);
  const favoriteCheck = (e) => {
    if (e.currentTarget.checked) {
      utils.post_favorite_artist(id, props.name);
    } else {
      utils.delete_favorite_artist(id, props.name);
    }
  };
  const Title = styled.h3`
    font-size: 2em;
    margin-bottom: 20px;
    font-family: "Caveat", cursive, "Kaushan Script", cursive, "Hannari";
  `;
  const Container = styled.div`
    color: palevioletred;
    text-align: center;
  `;

  return (
    <>
      <Container>
        <Title>{props.name}</Title>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: "30px" }}>お気に入り登録</p>
            <Checkbox
              onChange={(e) => favoriteCheck(e)}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          </div>
          <div
            onClick={() => {
              dispatch({ type: "CAHNGE_ARTIST_URL", url: props.artist_url });
            }}
          >
            {props.imageUrl ? <img src={props.imageUrl.url} alt="" /> : ""}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Listitem;
