import React, { useEffect, useState } from "react";
import { Aside } from "../components/Aside";
import { Menu } from "../components/Menu";
import { auth } from "../firebase/firebaseConfig";
import { Col } from "react-bootstrap";
import { OtherUser } from "../components/OtherUsers";
import { OtherPosts } from "../components/OtherPosts";
import { Chatbot } from '../components/Chatbot'
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";

export const Usuarios = () => {
    const { id } = useParams()
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
                    <OtherUser
                        userID={id}
                    />
                    <OtherPosts
                        userID={id}
                    />
                </Col>
                <Col sm={3} style={{ backgroundColor: "#565252" }} className="position-fixed end-0">
                    <Aside />
                </Col>
            </div>
            <Chatbot />
            <Footer />
        </div>
    );
};
