import React from 'react';
import "./NavBar.css";
import CardWidget from '../CardWidget/CardWidget';

import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div >
            <nav className='NavBar' >
                <ul  >
                   <li><Link to="/">Inicio</Link></li> 
                    <li><Link to="/category/men's clothing">Hombre</Link></li>
                    <li><Link to="/category/women's clothing">Mujer</Link></li>
                    <li><Link to="/ContactPage">Contacto</Link></li>
                    <li><CardWidget/></li>
                </ul>
            </nav>
        </div>
  )
}

export default NavBar