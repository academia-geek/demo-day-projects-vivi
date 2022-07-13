import React from 'react'
import { SectionHero } from '../styles/globalStyles'

export const BienvenidoEn = () => {
    return (
        <SectionHero className='d-flex align-items-center gap-4'>
            <div style={{ width: "40%" }}>
                <h1>Welcome to ViVi</h1>
                <h3>
                    We are a project inspired by the wonders that the Colombian territory keeps through its landscapes, its people and its culture.
                </h3>
                <h3>
                    For this reason, we want to invite you to discover what this majestic and colorful land has to offer you in each of its corners.
                </h3>
                <h3>
                    Join us and take part of this exciting adventure.
                </h3>
            </div>
            <div style={{ width: "60%" }}>
                <img src="https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2020/09/23/carnaval.jpeg?itok=WiZfIQv2" alt="" />
            </div>
        </SectionHero>
    )
}
