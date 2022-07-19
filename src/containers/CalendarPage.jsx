import React, { useState } from 'react'
import {  Col } from "react-bootstrap";
import { Calendar } from 'antd';
import { TittleStyle } from '../styles/calendarStyle';
import { SiderCalendar } from '../components/calendar _and_programming/Sider';
import { CardEvent } from '../components/calendar _and_programming/CardEvent';
import moment from 'moment'

export const CalendarPage = () => {
  const datel =new Date(moment().format('YYYY-MM-DD')).getTime()
  const [date, setdate] = useState(datel);
  const onSelect=(value)=> {
  setdate(new Date(value.format('YYYY-MM-DD')).getTime())   
  };
     
  return (
    <div>
      <div className="d-flex">
        <Col sm={9}>
        <div className="site-calendar-demo-card" >
            <Calendar fullscreen={false} onSelect={onSelect}/>
          </div>
          <CardEvent m={date} />
        </Col>
        <Col sm={3}>
          <div style={{ height: "100vw", background: " #565252", marginTop: "-10px", width: '20vw', marginLeft: "4.9vw" }}>
            <TittleStyle>CONOCE COLOMBIA</TittleStyle>
          </div>
          <SiderCalendar/>
        </Col>
      </div>
    </div>
  )
}
