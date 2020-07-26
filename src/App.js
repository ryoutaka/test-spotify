import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";

function App() {
  const loginFlag = useSelector((store) => store.users.loginFlag);

  return (
    <>
      <Router>
        {loginFlag ? (
          <div>
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
