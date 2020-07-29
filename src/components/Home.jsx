import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Top from "./Top";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 5.5rem;
  text-align: center;
  color: #30a9de;
  font-family: "Caveat", cursive;
  margin: 20px;
  animation-name: fadein;
  animation-duration: 2s;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
