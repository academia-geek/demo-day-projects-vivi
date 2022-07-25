import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { NavbarSelect, NavbarStyled } from "../styles/landingStyles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export function NavbarLanding() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <NavbarStyled expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="text-uppercase" as={Link} to="/">
          <img src={logo} />
          ViVi
        </Navbar.Brand>

        <div className="nav-before d-lg-none d-flex ms-auto">
          <Nav.Link as={Link} to="/login" className="me-2 icon">
            <PersonOutlineOutlinedIcon />
          </Nav.Link>
          <Nav.Link as={Link} to="/signin" className="btn-register px-3 py-2">
            Regístrate
          </Nav.Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto nav-center">
            <Nav.Link href="/#about">Conócenos</Nav.Link>
            <Nav.Link as={Link} to="/business">
              ViVi Empresarial
            </Nav.Link>
            <Nav.Link href="/#contact">Contáctanos</Nav.Link>
          </Nav>
          <Nav className="d-lg-flex d-none gap-2">
            <Nav.Link as={Link} to="/login" className="btn-login px-3 py-2">
              <PersonOutlineOutlinedIcon className="me-2 mb-1" />
              Inicia sesión
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="btn-register px-3 py-2">
              Regístrate
            </Nav.Link>
            <NavbarSelect onChange={handleChange} defaultValue="ES">
              <option value="EN">
                <NavLink to="/En">EN</NavLink>
              </option>
              <option value="ES">
                <NavLink to="/">ES</NavLink>
              </option>
            </NavbarSelect>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
}
