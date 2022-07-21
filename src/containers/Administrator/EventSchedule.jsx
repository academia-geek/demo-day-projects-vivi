import { Paper } from '@mui/material'
import { Button } from 'antd'
import React from 'react'
import { FormSchedule } from '../../components/calendar _and_programming/Formschedule'
import { Footer } from '../../components/Footer'
import { FontStyled1 } from '../../styles/calendarStyle'


export const EventSchedule = () => {
  return (
    <FontStyled1 >
      <Paper elevation={12} style={{ marginLeft: '20vw', width:"60vw",height:"450px"}}>
        <h1 style={{textAlign:"center",paddingTop:"50px"}}>Ingresa los datos de las actividades del itinerario</h1> 
        <FormSchedule/>
        </Paper>
        <br/>
        <Footer/>
    </FontStyled1>
    
  )
}
