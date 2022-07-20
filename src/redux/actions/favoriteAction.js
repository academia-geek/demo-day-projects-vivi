import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
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
    const docRef = doc(db, "Favorites", auth.currentUser?.uid);
    const docData = await getDoc(docRef);
    console.log(docData);
    if (docData._document === null) {
      setDoc(docRef, {
        favorites: [
          {
            id: id,
          },
        ],
      });
    } else {
      const favoritesData = docData.data().favorites;
      const favorites = [];
      favoritesData.forEach((favorite) => {
        favorites.push(favorite);
      });
      if (favorites.find((favorite) => favorite.id === id)) {
        return;
      }
      favorites.push({
        id: id,
      });
      updateDoc(docRef, {
        favorites: favorites,
      });
    }
    dispatch(addToFavoriteSync(id));
    dispatch(getFavoriteAsync());
  };
};

export const getFavoriteAsync = () => {
  return async (dispatch) => {
    const docRef = doc(db, "Favorites", auth.currentUser?.uid);
    const docData = await getDoc(docRef);
    const favoritesData = docData.data();
    dispatch(getFavoriteSync([favoritesData]));
  };
};

export const removeFromFavoriteAsync = (id) => {
  return async (dispatch) => {
    const docRef = doc(db, "Favorites", auth.currentUser?.uid);
    const docData = await getDoc(docRef);
    const favoritesData = docData.data().favorites;
    const favorites = [];
    favoritesData.forEach((fav) => {
      favorites.push(fav);
    });
    const newFavorites = favorites.filter((fav) => fav.id !== id);
    updateDoc(docRef, {
      favorites: newFavorites,
    }).then(() => {
      dispatch(removeFromFavoriteSync(id));
      dispatch(getFavoriteAsync());
    });
  };
};
