import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Top from "./Top";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Index;
