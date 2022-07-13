import { Button, Card } from 'antd'
import React from 'react'
import { CardsBusiness } from '../components/CardsBusiness'
import { Footer } from '../components/Footer'
import { NavbarLanding } from '../components/Navbar'
import {  Div } from '../styles/businessStyles'


export const Business = () => {
  return (
    <>
     <NavbarLanding/>
    <Div className="business">
    <div>
    <h2 className='titlleBusi'>Lo mejor de ViVi para impulsar tu región</h2>
    <Button style={{marginLeft:"35vw"}} shape="round" href='#cardBusiness'>
     Conoce más
    </Button>
    </div>      
    </ Div>
     <h4 id='cardBusiness' className='contBusi'>Una herramienta para promociar los festivales, ferias, fiestas, carnavales y sitios turisticos de tu región</h4>
    <CardsBusiness />
    <Button type="ghost" href='/bienvenido' style={{ color: "rgba(255, 189, 41, 1)",border:"2px solid rgba(255, 189, 41, 1)",marginLeft:"45vw",marginTop:"15px" }}>COMIENZA CON ViVi</Button>
    <Footer/>
    </>
  )
}
