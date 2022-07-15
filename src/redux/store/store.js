import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { gustosReducers } from "../reducers/gustosReducer";
import { eventsReducers } from "../reducers/eventsReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  gustos: gustosReducers,
  eventos:eventsReducers
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));