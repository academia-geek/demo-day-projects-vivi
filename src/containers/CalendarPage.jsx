import React from 'react'
import  { MainCalendar } from '../components/Calendar'
import {  Col } from "react-bootstrap";
import { NavbarHome } from '../components/NavbarHome'
import { SiderCalendar } from '../components/Sider';
import { Aside } from "../components/Aside";

export const CalendarPage = () => {
  return (
    <div>
        <NavbarHome />
        <div className="d-flex">
        <Col sm={9}>
        <MainCalendar/>
        <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br /> 
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br /> 
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
