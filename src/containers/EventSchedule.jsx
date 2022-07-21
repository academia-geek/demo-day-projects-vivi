import { Paper } from '@mui/material'
import { Button } from 'antd'
import React from 'react'
import { FormSchedule } from '../components/calendar _and_programming/Formschedule'
import { FontStyled1 } from '../styles/calendarStyle'


export const EventSchedule = () => {
  return (
    <FontStyled1 >
      <br/>
      <br/>
      <br/>
      <br/>
        {/* <Button style={{marginTop:'80px'}}>Ingreasar Programación manualmente </Button>
        <Button> Cargar Programación</Button> */}
        <Paper elevation={12} style={{ marginLeft: '20vw', width:"60vw",height:"530px"}}>
        <h1 style={{textAlign:"center"}}>Ingresa los datos de las actividades del itinerario</h1> 
        <FormSchedule/>
        </Paper>
    </FontStyled1>
  )
}
