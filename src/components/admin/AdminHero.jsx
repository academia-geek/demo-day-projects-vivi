import React from 'react'
import agendar from '../../assets/agendar.png'
import listar from '../../assets/listar.png'
import { HeroCards } from '../../styles/globalStyles'

export const AdminHero = () => {
  return (
    <section className="d-flex gap-3">
        <HeroCards>
            <img src={agendar} alt="Agendar" />
        </HeroCards>
        <HeroCards>
            <img src={listar} alt="Listar" />
        </HeroCards>
    </section>
  )
}
