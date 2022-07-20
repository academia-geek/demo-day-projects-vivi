import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { typesFavorite } from "../types/types";

const addToFavoriteSync = (id) => {
  return {
    type: typesFavorite.ADD_TO_FAVORITE,
    payload: id,
  };
};

const removeFromFavoriteSync = (id) => {
  return {
    type: typesFavorite.REMOVE_FROM_FAVORITE,
    payload: id,
  };
};

const getFavoriteSync = (favorites) => {
  return {
    type: typesFavorite.LIST_FAVORITE,
    payload: favorites,
  };
};

export const addToFavoriteAsync = (id) => {
  return async (dispatch) => {
    setDoc(doc(db, "Favorites", auth.currentUser?.uid), {
      id,
    });
    dispatch(addToFavoriteSync(id));
    dispatch(getFavoriteAsync());
  };
};

export const getFavoriteAsync = () => {
  return async (dispatch) => {
    const collectionFavorites = collection(db, "Favorites");
    const getFavorites = await getDocs(collectionFavorites);
    const favorites = [];
    getFavorites.forEach((fav) => {
      favorites.push({
        ...fav.data(),
      });
    });
    dispatch(getFavoriteSync(favorites));
  };
};

export const removeFromFavoriteAsync = (id) => {
  return async (dispatch) => {
    const collectionFavorites = collection(db, "Favorites");
    const q = query(collectionFavorites, where("id", "==", id));
    const getFavorites = await getDocs(q);
    getFavorites.forEach((fav) => {
      deleteDoc(doc(db, "Favorites", fav.id));
    });
    dispatch(removeFromFavoriteSync(id));
    dispatch(getFavoriteAsync());
  };
};
