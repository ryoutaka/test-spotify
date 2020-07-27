import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { sendLoginInfomation } from "../redux/users/util";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  textInput: {
    display: "block",
    marginBottom: "40px",
  },
  button: {
    display: "block",
    margin: "0 auto",
    // marginLeft: "100%",
  },
});

const Title = styled.h2`
  font-size: 1.5em;
`;

const Container = styled.div`
  height: 50%;
  width: 50%;
  text-align: center;
`;
const Index = () => {
  const styles = useStyle();
  const nickNameFeeld = useRef(null);
  const passWordFeeld = useRef(null);
  const dispatch = useDispatch();

  const loginFlag = useSelector((store) => store.users.loginFlag);

  const loginFunc = () => {
    dispatch(
      sendLoginInfomation(
        nickNameFeeld.current.value,
        passWordFeeld.current.value
      )
    );
  };

  return (
    <>
      <Container>
        <Title>Login してください</Title>
        <TextField
          fullWidth={true}
          className={styles.textInput}
          inputRef={nickNameFeeld}
          id="standard-required"
          label="nickname"
        />

        <TextField
          fullWidth={true}
          className={styles.textInput}
          inputRef={passWordFeeld}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          className={styles.button}
          onClick={() => loginFunc()}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </Container>
    </>
  );
};

export default Index;
