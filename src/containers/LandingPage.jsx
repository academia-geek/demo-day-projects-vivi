import React from 'react'
import { Chatbot } from '../components/Chatbot'
import { Footer } from '../components/Footer'
import { AlertVivi } from '../components/Alert'
import { NavbarLanding } from '../components/Navbar'
import imagenLanding from '../assets/imagenLanding.jpg'
import { SectionHero } from '../styles/globalStyles'


export const LandingPage = () => {
    return (
        <>
            <NavbarLanding fixed="top" />
            <img src={imagenLanding} style={{ width: "100vw" }} />
            <AlertVivi />
            <SectionHero className='d-flex align-items-center gap-4'>
                <div id='about' style={{ width: "40%" }}>
                    <h1>Bienvenido a ViVi</h1>
                    <h3>
                        Somos un proyecto inspirado en las maravillas que guarda el territorio Colombiano a través de sus paisajes, sus personas y su cultura.
                    </h3>
                    <h3>
                        Por eso, queremos invitarte a conocer lo que esta majestuosa y colorida tierra tiene para ofrecerte en cada uno de sus rincones.
                    </h3>
                    <h3>
                        Acompáñanos y anímate a participar de esta emocionante aventura.
                    </h3>
                </div>
                <div style={{ width: "60%" }}>
                    <img src="https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2020/09/23/carnaval.jpeg?itok=WiZfIQv2" alt="" />
                </div>
            </SectionHero>
            <Chatbot />
            <Footer />
        </>
    )
}
