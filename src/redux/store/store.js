import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));