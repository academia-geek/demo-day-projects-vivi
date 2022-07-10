import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoPKrGzJQ37bA07RDUEG7PjBe3M2JE0qw",
  authDomain: "vivi-b2804.firebaseapp.com",
  projectId: "vivi-b2804",
  storageBucket: "vivi-b2804.appspot.com",
  messagingSenderId: "282924830431",
  appId: "1:282924830431:web:7f759d5bb1653389d9236a"
};

const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const db = getFirestore();
export const auth = getAuth(app);