import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../users/reducer";
import { artistReducer } from "../artists/reducer";

const reducer = combineReducers({
  users: userReducer,
  artists: artistReducer,
});

export function createInitialStore() {
  return () => {
    return createStore(reducer, applyMiddleware(thunk));
  };
}
