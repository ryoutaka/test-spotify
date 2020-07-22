import initialState from "../store/initialState";
import * as actions from "./actions";

export const userReducer = (state = initialState.users, action) => {
  switch (actions.type) {
    default:
      return state;
  }
};
