import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { sendLoginInfomation } from "../redux/users/util";
import { Redirect, Switch, Route } from "react-router-dom";

const Index = () => {
  console.log("h");
  const nickNameFeeld = useRef(null);
  const passWordFeeld = useRef(null);
  const dispatch = useDispatch();
  const name = useSelector((store) => store.users.nickName);
  const loginFlag = useSelector((store) => store.users.loginFlag);
  const checkInput = (nickName, password) => {};
  console.log(loginFlag);
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
      <div>
        <h2>Login してください</h2>
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
      </div>
    </>
  );
};

export default Index;
