import React from 'react'
import { Chatbot } from '../components/Chatbot'
import { Footer } from '../components/Footer'
import { AlertVivi } from '../components/Alert'
import { NavbarLanding } from '../components/Navbar'
import { Bienvenido } from '../components/Bienvenido'

export const LandingPage = () => {
    return (
        <>
            <NavbarLanding />
            <img src='https://res.cloudinary.com/estudiante-geek/image/upload/v1657497223/Vivi/Publicaci%C3%B3n2_ndnaec.jpg' style={{ width: "100vw" }} />
            <AlertVivi />
            <Bienvenido />            
            <Chatbot />
            <Footer />
        </>
    )
}
