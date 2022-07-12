import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Menu } from "../components/Menu";
import { auth } from "../firebase/firebaseConfig";
import { DivMenu } from "../styles/homeStyles";

export const Home = () => {
  const [profile, setProfile] = useState(null);
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

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, []);

  return (
    <div>
      <DivMenu>
        <Button onClick={toggleDrawer("left", true)}>
          <Avatar src={profile?.photoURL} alt={profile?.displayName} />
        </Button>
        <span>Bienvenido, {profile?.displayName}</span>
      </DivMenu>
      <Menu toggleDrawer={toggleDrawer} sidebar={sidebar} profile={profile} />
    </div>
  );
};
