import React from 'react'
import agendar from '../../assets/agendar.png'
import listar from '../../assets/listar.png'
import { HeroCards } from '../../styles/globalStyles'

export const AdminHero = () => {
    return (
        <section className="d-flex justify-content-center gap-3" style={{ marginTop: "100px" }}>
            <Link to="/addEvent">
                <HeroCards>
                    <img src={agendar} alt="Agendar" />
                </HeroCards>
            </Link>
            <Link to="/detail">
                <HeroCards>
                    <img src={listar} alt="Listar" />
                </HeroCards>
            </Link>
        </section>
    )
}
