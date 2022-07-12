import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
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
          console.warn(error);
        }
      });
  };
};
