import React from 'react';
import "./NavBar.css";
import CardWidget from '../CardWidget/CardWidget';

import {link} from "react-router-dom";


const NavBar = () => {
    return (
        <div >
            <nav className='NavBar' >
                <ul  >
                    <link to="/">Inicio</link>
                    <link to="/ManPage">Hombre</link>
                    <link to="/WomenPage">Mujer</link>
                    <link to="/ContactPage">Contacto</link>
                    <li><CardWidget/></li>
                </ul>
            </nav>
        </div>
  )
}

export default NavBar