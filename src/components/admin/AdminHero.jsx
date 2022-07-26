import React from 'react'
import { Link } from 'react-router-dom'
import agendar from '../../assets/agendar.png'
import listar from '../../assets/listar.png'
import { HeroCards } from '../../styles/globalStyles'

export const AdminHero = () => {
    return (
        <section className="d-flex justify-content-center gap-3" style={{ marginTop: "100px" }}>
            <HeroCards>
                <Link to="/addEvent">
                    <img src={agendar} alt="Agendar" />
                    <h2>Agregar Evento Nuevo</h2>
                </Link>
            </HeroCards>
            <HeroCards>
                <Link to="/detail">
                    <img src={listar} alt="Listar" />
                    <h2>Ver Eventos Agendados</h2>
                </Link>
            </HeroCards>
        </section>
    )
}
