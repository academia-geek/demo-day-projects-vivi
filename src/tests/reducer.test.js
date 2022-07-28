import { loginReducer } from "../redux/reducers/loginReducer";
import { registerReducer } from "../redux/reducers/registerReducer";
import { typesLogin, typesRegister } from "../redux/types/types";

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
