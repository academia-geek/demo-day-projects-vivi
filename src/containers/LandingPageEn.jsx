import React from 'react'
import { NavbarLandingEn } from '../components/componentsEn/NavBarEn'
import imagenLanding from '../assets/imagenEn.jpg'
import { AlertViviEn } from '../components/componentsEn/AlertViviEn'
import { ChatbotEn } from '../components/componentsEn/ChatbotEn'
export const LandingPageEn = () => {
  return (
    <div>
        <NavbarLandingEn/>
        <img src={imagenLanding} style={{ width: "100vw" }} />
        <AlertViviEn/>
        <ChatbotEn />
           
    </div>
  )
}
