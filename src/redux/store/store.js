import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { eventsReducers } from "../reducers/eventsReducer";
<<<<<<< HEAD
import { infoReducers } from "../reducers/infoReducer";
=======
import { scheduleReducers } from "../reducers/schedule";
>>>>>>> 797d3cf97c9be53b4ea1927f35ea7037eb01153e

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  deseados: deseadosReducers,
  eventos:eventsReducers,
  register: registerReducer,
  login: loginReducer,
<<<<<<< HEAD
  info: infoReducers
=======
  gustos: gustosReducers,
  visitados: visitadosReducers,
  posts: postsReducers,
  schedule:scheduleReducers
  
>>>>>>> 797d3cf97c9be53b4ea1927f35ea7037eb01153e
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));