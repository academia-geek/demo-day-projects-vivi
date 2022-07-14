import React from 'react'
import  { MainCalendar } from '../components/Calendar'
import {  Col } from "react-bootstrap";
import { NavbarHome } from '../components/NavbarHome'
import { SiderCalendar } from '../components/Sider';

export const CalendarPage = () => {
  return (
    <div>
        <NavbarHome/>
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
          {/* <Aside />
          <ListAnun/> */}
          <SiderCalendar/>
        </Col>
        </div>
    </div>
  )
}
