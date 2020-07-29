import React from "react";
import { user_login } from "./redux/users/actions";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";

function App() {
  const dispatch = useDispatch();
  const loginFlag = useSelector((store) => store.users.loginFlag);

  if (localStorage.getItem("loginFlag")) {
    const user_id = localStorage.getItem("user_id");
    const nickName = localStorage.getItem("nickName");
    dispatch(user_login(nickName, user_id));
  }

  return (
    <>
      <Router>
        {loginFlag ? (
          <div>
            <Redirect to="/" />
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
