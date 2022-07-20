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
        id: auth.currentUser?.uid,
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
    const docRef = doc(db, "Favorites", auth.currentUser?.uid);
    const docData = await getDoc(docRef);
    const favoritesData = docData.data().favorites;
    favoritesData.forEach((favorite) => {
      if (favorite.id === id) {
        deleteDoc(docRef, favorite);
      }
    });
    dispatch(removeFromFavoriteSync(id));
    dispatch(getFavoriteAsync());
  };
};
