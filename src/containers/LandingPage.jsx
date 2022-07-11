import React from 'react'
import {  AlertVivi } from '../components/Alert'
import {  NavbarLanding } from '../components/Navbar'

export const LandingPage = () => {
  return (
    <div>
        <NavbarLanding/>
        <img src='https://res.cloudinary.com/estudiante-geek/image/upload/v1657497223/Vivi/Publicaci%C3%B3n2_ndnaec.jpg' style={{width:"100vw"}}/>
        <AlertVivi/>
    </div>
  )
}
