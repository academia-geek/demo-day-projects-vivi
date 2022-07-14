import React from 'react'
import  { MainCalendar } from '../components/Calendar'
import {  Col } from "react-bootstrap";
import { SiderCalendar } from '../components/Sider';

export const CalendarPage = () => {
  return (
    <div>
        <div className="d-flex">
        <Col sm={9}>
        <MainCalendar/>
        </Col>
        <Col sm={3}>
         <div style={{height:"100vw",background:" #565252",marginTop:"-10px",width:'20vw',marginLeft:"4.7vw"}}>
          <div style={{position: 'fixed',marginTop:"100px"}}>
          <h3 style={{writingMode: 'vertical-rl',color:'white',marginLeft:"210px"}}> CONOCE COLOMBIA</h3>
          </div> 
          </div>       
          <SiderCalendar/>
        </Col>
        </div>
    </div>
  )
}
