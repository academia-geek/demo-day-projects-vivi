import { Button, Select } from 'antd';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'

const { Option } = Select;

export function NavbarLandingEn() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
         };
    return (
        <Navbar expand="lg" fixed="top" style={{ backgroundColor: "rgba(255, 189, 41, 1)" }}>
            <Container>
                <Navbar.Brand href="/" style={{ color: "white" }}>
                    <img src={logo} style={{width:"40px",color:"white"}}/>
                    ViVi
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav.Link href="/#about" className='optionNavbar'>About us</Nav.Link>
                    <Nav.Link href="/business" className='optionNavbar'>Business ViVi</Nav.Link>
                    <Nav.Link href="/#contact" className='optionNavbar'>Contact us</Nav.Link>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link href="/login" className='optionNavbar'>Sign in</Nav.Link>
                    <Button className='btnRegistro' shape="round" href='/signin'>
                        Register
                    </Button>
                    <Select
                        defaultValue="EN"
                        className='optionSelect'
                        bordered={false}
                        onChange={handleChange}
                    >
                        <Option value="EN" > <NavLink to='/En' >EN</NavLink></Option>
                        <Option value="ES"><NavLink to="/">ES</NavLink></Option>
                    </Select>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

