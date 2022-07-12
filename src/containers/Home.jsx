import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu } from "../components/Menu";
import { logoutUserAsync } from "../redux/actions/loginActions";
import { DivMenu } from "../styles/homeStyles";

export const Home = () => {
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar({ ...sidebar, [anchor]: open });
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(logoutUserAsync())}>Cerrar sesión</button>
      <DivMenu>
        <Button onClick={toggleDrawer("left", true)}>
          <Avatar alt="k" />
        </Button>
        <span>Hola, usuario</span>
      </DivMenu>
      <Menu toggleDrawer={toggleDrawer} sidebar={sidebar} />
    </div>
  );
};
