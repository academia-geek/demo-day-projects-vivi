import React from 'react'
import { Chatbot } from '../components/Chatbot'
import { Footer } from '../components/Footer'
import { AlertVivi } from '../components/Alert'
import { NavbarLanding } from '../components/Navbar'
<<<<<<< HEAD
import { Bienvenido } from '../components/Bienvenido'
=======
import imagenLanding from '../assets/imagenLanding.jpg'

>>>>>>> 678c7b4302aaed15a0837bcf392d9bd88b53dca1

export const LandingPage = () => {
    return (
        <>
            <NavbarLanding />
            <img src={imagenLanding} style={{ width: "100vw" }} />
            <AlertVivi />
<<<<<<< HEAD
            <Bienvenido />            
=======
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
>>>>>>> 678c7b4302aaed15a0837bcf392d9bd88b53dca1
            <Chatbot />
            <Footer />
        </>
    )
}
