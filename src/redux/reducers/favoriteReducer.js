import { typesFavorite } from "../types/types";

const initialState = {
  favorites: [],
};
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesFavorite.ADD_TO_FAVORITE:
      return {
        favorites: [...state.favorites, action.payload],
      };
    case typesFavorite.REMOVE_FROM_FAVORITE:
      return {
        favorites: state.favorites.filter((c) => c.id !== action.payload),
      };
    case typesFavorite.LIST_FAVORITE:
      return {
        favorites: [...action.payload],
      };
    default:
      return state;
  }
};
