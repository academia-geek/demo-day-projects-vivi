import React from 'react'
import { Layout } from 'antd';
import { CardStyled } from '../styles/homeStyles';
import { Card } from 'react-bootstrap';
import place from "../assets/prueba/image.png";
import place1 from "../assets/prueba/image1.png";
import place2 from "../assets/prueba/image2.png";
import { CardStyledCalendar, LineStyle } from '../styles/calendarStyle';
const { Sider } = Layout;

export const SiderCalendar = () => {
  return (
   
    <Sider
      style={{
        width:"2000px",
        overflow: 'auto',
        height: '85vh',
        position: 'fixed',
        left: '79vw',
        top:'5vw',
        bottom: 0,
        background:'rgba(255, 189, 41,1)',
        
        
      }}
    >
     
      
      <CardStyledCalendar>
          <img src={place} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyledCalendar>
        <LineStyle/>
        <CardStyledCalendar>
          <img src={place1} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyledCalendar>
        <LineStyle/>
        <CardStyledCalendar>
          <img src={place2} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyledCalendar>
        <LineStyle/>
        <CardStyledCalendar>
          <img src={place1} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        
        </CardStyledCalendar>
        <LineStyle/>
        <CardStyledCalendar>
          <img src={place1} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyledCalendar>
        <LineStyle/>
        <CardStyledCalendar>
          <img src={place2} />
          <Card.Body>
            <Card.Title>Ferias y fiestas del sol y el acero</Card.Title>
          </Card.Body>
        </CardStyledCalendar>
    </Sider>
  
  )
}
