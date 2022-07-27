import React from "react";
import logo from "../assets/Logo.png";
import { CONTAINER, FOOTER, SECTION1 } from "../styles/globalStyles";
import { Contact } from "./Contact";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Copyright } from "./landing_page/Copyright";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FOOTER>
      <Container className="px-5 py-3 mt-lg-5 pt-lg-5">
        <Row className="gap-5 gap-lg-0 flex-column-reverse flex-lg-row">
          <Col sm={3}>
            <div className="nav-footer d-flex flex-column gap-2">
              <h6 className="fw-bold fs-5 mb-lg-4 mb-2 d-none d-lg-block">Producto</h6>
              <h6 className="fw-bold fs-1 mb-lg-4 mb-2 d-lg-none d-block">Producto</h6>
              <Link to="/login">Iniciar sesión</Link>
              <Link to="/home">Inicio</Link>
              <Link to="/profile">Perfil</Link>
              <Link to="/calendar">Calendario de eventos</Link>
            </div>
          </Col>
          <Col sm={3}>
            <div className="nav-footer d-flex flex-column gap-2">
              <h6 className="fw-bold fs-5 mb-lg-4 mb-2 d-none d-lg-block">Sobre nosotros</h6>
              <h6 className="fw-bold fs-1 mb-lg-4 mb-2 d-lg-none d-block">Sobre nosotros</h6>
              <a href="#">Quiénes somos</a>
              <a href="#">Contáctanos</a>
              <a href="#">Ayuda</a>
              <a href="#">Términos y condiciones</a>
            </div>
          </Col>
          <Col sm={3}>
            <div className="nav-footer d-flex flex-column gap-2">
              <h6 className="fw-bold fs-5 mb-lg-4 mb-2 d-none d-lg-block">ViVi Empresarial </h6>
              <h6 className="fw-bold fs-1 mb-lg-4 mb-2 d-lg-none d-block">ViVi Empresarial </h6>
              <Link to="/business">Qué es</Link>
              <Link to="/sign__in/Admi">Iniciar como organizador</Link>
              <Link to="/sign__in/Admi">Añadir eventos</Link>
              <Link to="/sign__in/Admi">Geolocalización</Link>
            </div>
          </Col>
          <Col sm={3}>
            <h6 className="fw-bold mb-lg-4 mb-2">
              <Navbar.Brand className="text-uppercase fs-5 d-none d-lg-block" as={Link} to="/">
                <img src={logo} />
                ViVi
              </Navbar.Brand>
              <Navbar.Brand className="text-uppercase fs-1 d-lg-none d-block" as={Link} to="/">
                <img src={logo} />
                ViVi
              </Navbar.Brand>
            </h6>
            <p style={{ color: "#8e8e8e" }}>
              Vivir para Viajar, Viajar para Vivir
            </p>
            <div className="d-flex flex-row gap-2 fs-3 mt-2 mt-lg-5 footer-icons">
              <FacebookIcon role="button" />
              <TwitterIcon role="button" />
              <InstagramIcon role="button" />
              <YouTubeIcon role="button" />
              <LinkedInIcon role="button" />
            </div>
          </Col>
        </Row>
      </Container>
      <Copyright />
    </FOOTER>
  );
};
