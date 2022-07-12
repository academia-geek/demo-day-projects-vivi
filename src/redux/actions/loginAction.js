import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types";

const loginUserSync = (email, password) => ({
  type: typesLogin.LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginUserAsync = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(loginUserSync(email, password));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logoutUserSync = () => {
  return {
    type: typesLogin.LOGOUT,
  };
};

export const logoutUserAsync = () => {
  return (dispatch) => {
    signOut(auth)
      .then(({ user }) => {
        dispatch(logoutUserSync());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
