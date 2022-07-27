import React from 'react'
import { Link } from 'react-router-dom'
import agendar from '../../assets/agendar.png'
import listar from '../../assets/listar.png'
import { TitleAdmi } from '../../styles/calendarStyle'
import { HeroCards } from '../../styles/globalStyles'

export const AdminHero = () => {
    return (
        <section style={{ backgroundColor:'rgba(201, 197, 189, 0.4)',height:"50vw" }}>
            <TitleAdmi> ViVi Empresarial</TitleAdmi>
            <h5 style={{textAlign:"center",fontWeight:"300"}}>Comienza a crear nuevos eventos </h5>
            <div style={{display:"flex",marginLeft:"30%",marginTop:"30px"}}>
            <HeroCards>
                <Link to="/addEvent">
                    <img src={agendar} alt="Agendar" />
                </Link>
            </HeroCards>
            <HeroCards>
                <Link to="/detail">
                    <img src={listar} alt="Listar" />
                </Link>
            </HeroCards>
            </div>
        </section>
    )
}
