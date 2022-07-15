import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Aside } from "../components/Aside";
import { Menu } from "../components/Menu";
import { auth } from "../firebase/firebaseConfig";
import { DivMenu } from "../styles/homeStyles";
import { Col } from "react-bootstrap";
import { User } from "../components/User";
import { Posts } from "../components/Posts";

export const Profile = () => {
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
            <div className="d-flex">
                <Col sm={9}>
                    <Menu
                        toggleDrawer={toggleDrawer}
                        sidebar={sidebar}
                        profile={profile}
                    />
                    <User />
                    <Posts />
                </Col>
                <Col sm={3}>
                    <Aside />
                </Col>
            </div>
        </div>
    );
};
