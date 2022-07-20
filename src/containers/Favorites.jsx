import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAsync } from "../redux/actions/favoriteAction";

export const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.favorites);

  useEffect(() => {
    dispatch(getFavoriteAsync());
  }, [dispatch]);

  console.log(favorites);

  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
};
