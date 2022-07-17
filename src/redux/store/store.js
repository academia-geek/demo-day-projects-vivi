import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { gustosReducers } from "../reducers/gustosReducer";
import { visitadosReducers } from "../reducers/visitadosReducer";
import { deseadosReducers } from "../reducers/deseadosReducer";
import { postsReducers } from "../reducers/postsReducer";
import { eventsReducers } from "../reducers/eventsReducer";
import { scheduleReducers } from "../reducers/schedule";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  deseados: deseadosReducers,
  eventos:eventsReducers,
  register: registerReducer,
  login: loginReducer,
  gustos: gustosReducers,
  visitados: visitadosReducers,
  posts: postsReducers,
  schedule:scheduleReducers
  
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));