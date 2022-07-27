import { Paper } from '@mui/material'
import React from 'react'
import { EventForm } from '../../components/calendar _and_programming/EventForm'
import { Footer } from '../../components/Footer'
import { FontStyled } from '../../styles/calendarStyle'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Logo.png'


export const AddEvent = () => {
  return (
    <div>
       <Navbar bg="dark" style={{margin:"0px",padding:"0px"}}>
        <Container>
          <Navbar.Brand href="/admin/home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="ViVi logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    <FontStyled >  
    <br/>
      <br/>
      <br/>
    <Paper elevation={12} style={{ marginLeft: '20vw', width:"60vw",height:"430px"}}>
    <h1 style={{textAlign:"center"}}>Ingresa los datos del Evento</h1> 
    < EventForm />
    </Paper>
      </FontStyled>
    </div>
  )
}
