import { Paper } from '@mui/material'
import React from 'react'
import { EventForm } from '../../components/calendar _and_programming/EventForm'
import { Footer } from '../../components/Footer'
import { FontStyled } from '../../styles/calendarStyle'



export const AddEvent = () => {
  return (
    <FontStyled >  
    <br/>
      <br/>
      <br/>
    <Paper elevation={12} style={{ marginLeft: '20vw', width:"60vw",height:"530px"}}>
    <h1 style={{textAlign:"center"}}>Ingresa los datos del Evento</h1> 
    < EventForm />
    </Paper>
  
    <Footer/>
    </FontStyled>
  )
}
