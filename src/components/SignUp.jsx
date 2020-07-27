import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sign_up } from "../redux/users/util";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  textInput: {
    display: "block",
    marginBottom: "40px",
  },
  button: {
    display: "block",
    margin: "0 auto",
    background: "#77AF9C",
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
  const dispatch = useDispatch();
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);
  const signUpFunc = () => {
    const nickname = nicknameRef.current.value;
    const password = passwordRef.current.value;
    dispatch(sign_up(nickname, password));
  };

  return (
    <>
      <Container>
        <Title>SignUp してください</Title>
        <TextField
          fullWidth={true}
          className={styles.textInput}
          inputRef={nicknameRef}
          required
          id="standard-required"
          label="nickname"
        />

        <TextField
          fullWidth={true}
          className={styles.textInput}
          inputRef={passwordRef}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          className={styles.button}
          onClick={() => signUpFunc()}
          variant="contained"
          color="primary"
        >
          SignUp
        </Button>
      </Container>
    </>
  );
};

export default Index;
