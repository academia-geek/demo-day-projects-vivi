import React from 'react'
import { Link } from 'react-router-dom'
import agendar from '../../assets/agendar.png'
import listar from '../../assets/listar.png'
import { HeroCards } from '../../styles/globalStyles'

export const AdminHero = () => {
    return (
        <section style={{ backgroundColor:'rgba(201, 197, 189, 0.4)',height:"50vw" }}>
            <h1 style={{textAlign:"center", paddingTop:"5vw",fontSize:"80px",textShadow:"1px 8px 5px white", }}> ViVi Empresarial</h1>
            <h5 style={{textAlign:"center",fontWeight:"300"}}>Comienza a crear nuevos eventos </h5>
            <div style={{display:"flex",marginLeft:"30%",marginTop:"30px"}}>
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
            </div>
        </section>
    )
}
