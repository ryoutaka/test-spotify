import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Top from "./Top";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: #30a9de;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Index = () => {
  return (
    <div>
      <Title>Short Play Spotify</Title>
      <Container>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Container>
    </div>
  );
};

export default Index;
