import React from "react";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../redux/actions/loginActions";

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(logoutUserAsync())}>Cerrar sesión</button>
    </div>
  );
};
