import React, { useState } from 'react'
import {  Col } from "react-bootstrap";
import { SiderCalendar } from '../components/Sider';
import { CardEvent } from '../components/CardEvent';
import { Calendar } from 'antd';
import { TittleStyle } from '../styles/calendarStyle';

export const CalendarPage = () => {
  const [date, setdate] = useState();
  const onSelect=(value)=> {
    console.log(value)
    const date =value.format('YYYY-MM-DD')
    
    
  setdate(new Date(date).getTime())
   };
   
 
  return (
    <div>
      <div className="d-flex">
        <Col sm={9}>
        <div className="site-calendar-demo-card" >
            <Calendar fullscreen={false} onSelect={onSelect} />
          </div>
          <CardEvent m={date} />
        </Col>
        <Col sm={3}>
          <div style={{ height: "100vw", background: " #565252", marginTop: "-10px", width: '20vw', marginLeft: "4.9vw" }}>
            <TittleStyle>CONOCE COLOMBIA</TittleStyle>
          </div>
          <SiderCalendar />
        </Col>
      </div>
    </div>
  )
}
