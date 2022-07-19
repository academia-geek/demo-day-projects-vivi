import { Aside } from "../components/Aside";
import { CarouselEvents } from "../components/CarouselEvents";
import { Col } from "react-bootstrap";
import { Timeline } from "../components/Timeline";
import Alert from "@mui/material/Alert";
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

export const Home = () => {
  const [profile, setProfile] = useState({});

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
          {profile?.emailVerified === false ? (
            <>
              <Alert
                variant="filled"
                severity="error"
                style={{ marginTop: "60px" }}
              >
                Correo electrónico no verificado - Por favor revisa tu bandeja
                de entrada
              </Alert>
              <CarouselEvents />
            </>
          ) : (
            <CarouselEvents marginTop={"70px"} />
          )}
          <Timeline />
        </Col>
        <Col sm={3} className="position-fixed end-0">
          <Aside />
        </Col>
      </div>
    </div>
  );
};
