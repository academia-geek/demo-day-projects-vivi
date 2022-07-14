
import { Button, Select } from 'antd';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
const { Option } = Select;

export function NavbarLanding({ fixed }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
     };
 
  return (
    <Navbar  expand="lg" fixed={fixed} style={{backgroundColor:"rgba(255, 189, 41, 1)"}}>
      <Container>
        <Navbar.Brand href="/" style={{color:"white"}}>
            <img src={logo} style={{width:"60px",color:"white"}}/>
            ViVi
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav.Link href="/#about" className='optionNavbar'>Conócenos</Nav.Link>
        <Nav.Link href="/business" className='optionNavbar'>ViVi empresarial</Nav.Link>
        <Nav.Link href="/#contact" className='optionNavbar'>Contáctanos</Nav.Link>
        </Navbar.Collapse>
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
         
            <Nav.Link href="/login" className='optionNavbar'>Inicia sesión</Nav.Link>
           
            <Button className='btnRegistro' shape="round" href='/signin'>
              Regístrate
            </Button>
            <Select
             onChange={handleChange}
              defaultValue="ES"
              className='optionSelect'
              bordered={false}
              style={{background:"rgba(255, 189, 41, 1)"}}
            
            >
               <Option value="EN" > <NavLink  style={{color:"white"}} to="/En">EN</NavLink></Option>
               <Option value="ES" ><NavLink style={{color:"white"}} to="/">ES</NavLink></Option>
             
            </Select>
                  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

