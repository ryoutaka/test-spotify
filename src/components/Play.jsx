import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AfterLogin from "./AfterLogin";

const Index = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/main" component={AfterLogin} />
        </Switch>
      </div>
    </>
  );
};

export default Index;
