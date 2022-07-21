import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { eventsReducers } from "../reducers/eventsReducer";
import { infoReducers } from "../reducers/infoReducer";
import { scheduleReducers } from "../reducers/schedule";
import { favoriteReducer } from "../reducers/favoriteReducer";
import { postsReducers } from "../reducers/postsReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  eventos:eventsReducers,
  register: registerReducer,
  login: loginReducer,
  info: infoReducers,
  schedule: scheduleReducers,
  favorites: favoriteReducer,
  posts: postsReducers,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));