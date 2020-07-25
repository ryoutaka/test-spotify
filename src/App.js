import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";

function App() {
  const loginFlag = useSelector((store) => store.users.loginFlag);
  console.log("app");
  return (
    <>
      <Router>
        {loginFlag ? (
          <div>
            <Redirect to="main" />
            <Play />
          </div>
        ) : (
          <div className="App">
            <Home />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
