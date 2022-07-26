import { Aside } from "../../components/Aside";
import { Col } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import { auth } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { AdminHero } from "../../components/admin/AdminHero";
import { Footer } from "../../components/Footer";

export const AdminHome = () => {
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
        <Col sm={9} style={{height: "100vh"}}>
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
              <AdminHero />
            </>
          ) : (
            <AdminHero marginTop={"63px"} />
          )}
        </Col>
        <Col sm={3} className="position-fixed end-0">
          <Aside />
        </Col>
      </div>
      <Footer />
    </div>
  );
};
