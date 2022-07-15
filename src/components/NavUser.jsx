import { Avatar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { DivMenu } from "../styles/homeStyles";
import { Menu } from "./Menu";

export const NavUser = () => {
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
    <>
      <DivMenu style={{ width: "100vw", position: "fixed", zIndex: "99"}}>
        <Button
          onClick={toggleDrawer("left", true)}
          style={{ cursor: "pointer" }}
        >
          <Avatar src={profile?.photoURL} alt={profile?.displayName} />
        </Button>
        <span style={{ userSelect: "none" }}>
          Bienvenido, {profile?.displayName}
        </span>
      </DivMenu>
      <Menu toggleDrawer={toggleDrawer} sidebar={sidebar} profile={profile} />
    </>
  );
};
