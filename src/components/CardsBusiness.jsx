import { Card } from 'antd'
import React from 'react'
import calendar from '../assets/calendar.jpg'
import interaction from '../assets/interaccion.webp'
import location from '../assets/location.png'
const { Meta } = Card;
export const CardsBusiness = () => {
  return (
    <div style={{display:"flex",justifyContent:'space-evenly'}} id="cardBusiness">
    <Card
   hoverable
   style={{
     width: 240,
    border:'none'
   }}
   cover={<img alt="example" src={calendar} style={{height:'230px'}} />}
 >
   <Meta title="Calendario" description="Por medio de un calendario podras enlistar los eventos planeados en tu región. " />
 </Card>
 <Card
   hoverable
   style={{
     width: 240,
     border:'none'
   }}
   cover={<img alt="example" src={interaction} style={{height:'230px'}}/>}
 >
   <Meta title="Interacción" description="La interacción entre turistas por medio de publicaciónes acelerara el reconocimiento de tu territorio." />
 </Card>
 <Card
   hoverable
   style={{
     width: 240,
     border:'none'
   }}
   cover={<img alt="example" src={location} style={{height:'230px'}}/>}
 >
   <Meta title="Localización" description="Con esta herramienta facilitaremos a tus futuros turistas la llegada a descubrir los paisajes de tu región" />
 </Card>

    </div>
  )
}
