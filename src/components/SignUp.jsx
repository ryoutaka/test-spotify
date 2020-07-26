import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { sign_up } from "../redux/users/util";
import Button from "@material-ui/core/Button";

const Index = () => {
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
      <TextField
        inputRef={nicknameRef}
        required
        id="standard-required"
        label="nickname"
      />

      <TextField
        inputRef={passwordRef}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button onClick={() => signUpFunc()} variant="contained" color="primary">
        SignUp
      </Button>
    </>
  );
};

export default Index;
