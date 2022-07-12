import { typesRegister } from "../types/types";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.REGISTER:
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        location: action.payload.location,
      };

    default:
      return state;
  }
};
