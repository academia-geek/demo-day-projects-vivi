import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, facebook, google } from "../../firebase/firebaseConfig";
import { typesRegister } from "../types/types";

const registerUserSync = (name, email, password, location) => {
  return {
    type: typesRegister.REGISTER,
    payload: {
      name,
      email,
      password,
      location,
    },
  };
};

export const registerUserAsync = (name, email, password, location) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://res.cloudinary.com/divjxvhtz/image/upload/v1654795718/CRUD-heroku/images_fvkv1s.png",
        });
        dispatch(registerUserSync(name, email, password, location));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("El correo electrónico ya está en uso");
        } else {
          console.warn("No se ha podido registrar el usuario", error);
        }
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google)
      .then(async ({ user }) => {
        dispatch(registerUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert("El correo electrónico ya está en uso");
        } else if (error.code === "auth/popup-closed-by-user") {
          return;
        } else {
          console.warn("No se ha podido registrar el usuario", error);
        }
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(registerUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert("El correo electrónico ya está en uso");
        } else if (error.code === "auth/popup-closed-by-user") {
          return;
        } else {
          console.warn("No se ha podido registrar el usuario", error);
        }
      });
  };
};
