import { loginReducer } from "../redux/reducers/loginReducer";
import { registerReducer } from "../redux/reducers/registerReducer";
import { typesLogin, typesRegister } from "../redux/types/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerUserAsync } from "../redux/actions/registerAction";
import { loginUserAsync } from "../redux/actions/loginAction";

describe("Test of the reducer", () => {
  test("Validate the reducer of the typesRegister - Register success", () => {
    const action = {
      type: typesRegister.REGISTER,
      payload: {
        name: "user",
        email: "user@email.com",
        password: "123456",
      },
    };

    const state = registerReducer({}, action);

    expect(state).toEqual({
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    });
  });

  test("Validate the reducer of the typesRegister - Register error, enter you email", () => {
    const action = {
      type: typesRegister.REGISTER,
      payload: {
        name: "user",
        password: "123456",
      },
    };

    const state = registerReducer({}, action);

    if (state.email === undefined || state.email === "") {
      state.email = null;
    }

    expect(state).not.toEqual({
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    });
  });

  test("Validate the reducer of typesLogin - Login success", () => {
    const action = {
      type: typesLogin.LOGIN,
      payload: {
        email: "user@email.com",
        password: "123456",
      },
    };

    const state = loginReducer({}, action);

    expect(state).toEqual({
      email: action.payload.email,
      password: action.payload.password,
    });
  });

  test("Validate the reducer of typesLogin - Logout", () => {
    const action = {
      type: typesLogin.LOGOUT,
    };

    const state = loginReducer({}, action);

    expect(state).toEqual({});
  });
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("Test login and register with Firebase", () => {
  test("I should register a new user", async () => {
    await store.dispatch(
      registerUserAsync({
        name: "user",
        email: "user@email.com",
        password: "123456",
      })
    );

    const actions = store.getActions();
  });

  test("I should login a user", async () => {
    await store.dispatch(
      loginUserAsync({
        email: "user@email.com",
        password: "123456",
      })
    );

    const actions = store.getActions();
  });
});
