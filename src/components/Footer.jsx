import React from 'react';
import logo from '../assets/Logo.png'
import { CONTAINER, FOOTER, SECTION1 } from '../styles/globalStyles';
import { Contact } from './Contact';

export const Footer = () => {
    return (
        <FOOTER>
            <CONTAINER>
                <SECTION1>
                    <p><img alt="Logo" src={logo} /> ViVi</p>
                </SECTION1>
                <div>
                    <ul style={{listStyle: "none"}}>
                        <li>Ayuda</li>
                        <Contact />
                        <li>Sobre Nosotros</li>
                        <li>Términos y condiciones</li>
                    </ul>
                </div>
            </CONTAINER>

            <div className='mt-3'>
                <span>Copyright ViVi © 2022. All rights reserved.&nbsp;</span>
            </div>
        </FOOTER>
    );
};
