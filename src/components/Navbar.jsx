import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/Logo.png'

export function NavbarLanding() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} style={{width:"40px"}}/>
            ViVi
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/login">Ingresar</Nav.Link>
            <Nav.Link href="/signin">Registrarse</Nav.Link>
            <Form.Select aria-label="Default select example">
            <option >Es</option>
            <option >En</option>
            
         </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

