import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_user_favorite } from "../redux/users/util";
import styled from "styled-components";
import Test from "./Test";

const Container = styled.div`
  text-align: center;
  color: palevioletred;
`;

const Title = styled.h2`
  padding: 20px;
  font-size: 2em;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Andex = () => {
  const dispatch = useDispatch();
  const loginFlag = useSelector((store) => store.users.loginFlag);
  const user_id = useSelector((store) => store.users.user_id);
  const favorites = useSelector((store) => store.users.favoriteArtist);
  const result = favorites.map((obj) => <Test name={obj.artist_name} />);
  useEffect(() => {
    dispatch(get_user_favorite(user_id));
  }, []);
  console.log("mypage");
  return (
    <>
      <Container>
        <Title>あなたがお気に入りをしたアーティスト達</Title>
        <ImageContainer>{result}</ImageContainer>
      </Container>
    </>
  );
};

export default Andex;
