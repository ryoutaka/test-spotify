import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const index = () => {
  return (
    <>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </>
  );
};
