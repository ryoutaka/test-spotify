import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Index = () => {
  return (
    <>
      <Link to="/login">
        <Button variant="contained" color="primary">
          LOGIN画面はこちらです
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="contained" color="primary">
          SIGNUP画面はこちらです
        </Button>
      </Link>
    </>
  );
};

export default Index;
