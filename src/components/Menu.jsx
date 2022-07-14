import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import { BoxStyled } from "../styles/homeStyles";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Logout } from "../assets/logout.svg";
import { ReactComponent as Contact } from "../assets/phone.svg";
import { ReactComponent as Help } from "../assets/help.svg";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../redux/actions/loginAction";
import { Link } from "react-router-dom";

export const Menu = ({ toggleDrawer, sidebar, profile }) => {
  const dispatch = useDispatch();
  const list = (anchor) => (
    <BoxStyled
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="pb-4 d-flex gap-3 align-items-center">
        <Avatar src={profile?.photoURL} alt={profile?.displayName} />
        <span className="fs-5">{profile?.displayName}</span>
      </div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="gap-2 text-white" as={Link} to="/home">
            <Home className="icon" />
            <ListItemText className="pt-2" primary={"Inicio"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="gap-2 text-white" as={Link} to="/">
            <Edit className="icon" />
            <ListItemText className="pt-2" primary={"Tu perfil"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="gap-2 text-white" as={Link} to="/">
            <Heart className="icon" />
            <ListItemText primary={"Tus eventos guardados"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="gap-2 text-white" as={Link} to="/calendar">
            <Calendar className="icon" />
            <ListItemText primary={"Calendario"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="gap-2">
            <Contact className="icon" />
            <ListItemText className="pt-2" primary={"Contáctanos"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="gap-2">
            <Help className="icon" />
            <ListItemText className="pt-2" primary={"Ayuda"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            className="gap-2"
            onClick={() => dispatch(logoutUserAsync())}
          >
            <Logout className="icon" />
            <ListItemText className="pt-2" primary={"Cerrar sesión"} />
          </ListItemButton>
        </ListItem>
      </List>
    </BoxStyled>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={sidebar.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
};
