import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
const useStyles = makeStyles({
  button: {
    display: "block",
    marginBottom: "30px",
    background: "#77AF9C",
    fontSize: "2.5em",
  },
});

const Container = styled.div`
  height: 70%;
  width: 70%;
`;

const Index = () => {
  const style = useStyles();
  return (
    <>
      <div>
        <Link to="/login">
          <Button className={style.button} variant="contained" color="primary">
            LOGIN画面はこちらです
          </Button>
        </Link>
        <Link to="/signup">
          <Button className={style.button} variant="contained" color="primary">
            SIGNUP画面はこちらです
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Index;
