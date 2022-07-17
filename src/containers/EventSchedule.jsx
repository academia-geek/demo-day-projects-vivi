import { Button } from 'antd'
import React from 'react'
import { FormSchedule } from '../components/calendar _and_programming/Formschedule'


export const EventSchedule = () => {
  return (
    <div >
        <Button style={{marginTop:'80px'}}>Ingreasar Programación manualmente </Button>
        <Button> Cargar Programación</Button>
        <FormSchedule/>
    </div>
  )
}
