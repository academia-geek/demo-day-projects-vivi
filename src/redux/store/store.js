import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { gustosReducers } from "../reducers/gustosReducer";
import { eventsReducers } from "../reducers/eventsReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  eventos:eventsReducers,
  register: registerReducer,
  login: loginReducer,
  gustos: gustosReducers,
  
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));