import { Button, Card } from 'antd'
import React from 'react'
import { CardsBusiness } from '../../components/CardsBusiness'
import { Footer } from '../../components/Footer'
import { NavbarLanding } from '../../components/Navbar'
import {  ButtonBusiness, Div } from '../../styles/businessStyles'
import { ButtonLanding } from '../../styles/landingStyles'


export const Business = () => {
  return (
    <>
     <NavbarLanding/>
    <Div className="business">
    <div>
    <h2 className='titlleBusi'>Lo mejor de ViVi para impulsar tu región</h2>
    <ButtonBusiness type="ghost" style={{marginLeft:"35vw"}} shape="round" href='#cardBusiness'>
     Conoce más
    </ButtonBusiness>
    </div>      
    </ Div>
     <h4 id='cardBusiness' className='contBusi'>Una herramienta para promocionar los festivales, ferias, fiestas, carnavales y sitios turísticos de tu región</h4>
    <CardsBusiness />
    <ButtonBusiness style={{marginLeft:"42%"}} type="ghost" href='/sign__in/Admi'>COMIENZA CON ViVi</ButtonBusiness>
    <Footer/>
    </>
  )
}
