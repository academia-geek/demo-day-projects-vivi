import {
  createUserWithEmailAndPassword,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, facebook, google } from "../../firebase/firebaseConfig";
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
            "https://res.cloudinary.com/dd5yolnde/image/upload/v1657788433/user_l2s3mu.png",
        });
        dispatch(registerUserSync(name, email, password, location));
        const usuarioID = user?.uid;

        setDoc(doc(db, "Info", usuarioID), {
          edad: "",
          Gustos: [{}],
          Visitados: [{}],
          Deseados: [{}],
          Posts: [{}],
        });
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
        const usuarioID = user?.uid;
        const docRef = doc(db, "Info", usuarioID);
        const docSnap = await getDoc(docRef);

        if (docSnap._document == null) {
          setDoc(doc(db, "Info", usuarioID), {
            edad: "",
            Gustos: [{}],
            Visitados: [{}],
            Deseados: [{}],
            Posts: [{}],
          });
        }

        dispatch(registerUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert("El correo electrónico ya está en uso");
        } else if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
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
      .then(async ({ user }) => {
        const usuarioID = user?.uid;
        const docRef = doc(db, "Info", usuarioID);
        const docSnap = await getDoc(docRef);

        if (docSnap._document == null) {
          setDoc(doc(db, "Info", usuarioID), {
            edad: "",
            Gustos: [{}],
            Visitados: [{}],
            Deseados: [{}],
            Posts: [{}],
          });
        }
        dispatch(registerUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert("El correo electrónico ya está en uso");
        } else if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
          return;
        } else {
          console.warn("No se ha podido registrar el usuario", error);
        }
      });
  };
};

const actionCodeSettings = {
  url: "http://localhost:3000/login/company",
  handleCodeInApp: true,
};

export const sendEmailAdmin = (email) => {
  return (dispatch) => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        alert("Se ha enviado un enlace de inicio de sesión a tu correo, por favor revisa tu bandeja de entrada para ingresar al sistema de organizadores");
        window.localStorage.setItem("emailForVerification", email);
        window.location.href = "/";
      })
      .catch((error) => {
        console.warn("No se ha podido enviar el correo de verificación", error);
      });
  };
};

export const confirmEmailAdmin = () => {
  return (dispatch) => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem("emailForVerification");
      if (!email) {
        alert("No se ha podido enviar el correo de verificación");
        return;
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then(async ({ user }) => {
          window.localStorage.removeItem("emailForVerification");
          dispatch(registerUserSync(email));
        })
        .catch((error) => {
          console.warn(
            "No se ha podido enviar el correo de verificación",
            error
          );
        });
    }
  };
};
