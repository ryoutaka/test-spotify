import React, { useRef } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Index = () => {
  const nickNameFeeld = useRef(null);
  const passWordFeeld = useRef(null);

  const checkInput = (nickName, password) => {};

  const loginFunc = () => {};

  return (
    <>
      <TextField
        inputRef={nickNameFeeld}
        id="standard-required"
        label="nickname"
      />

      <TextField
        inputRef={passWordFeeld}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button onClick={() => loginFunc()} variant="contained" color="primary">
        Login
      </Button>
    </>
  );
};

export default Index;
