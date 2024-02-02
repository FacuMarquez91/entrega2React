import React, { useContext } from 'react';
import "./NavBar.css";  // Asegúrate de ajustar la ruta según la ubicación de tu archivo CSS

import CardWidget from '../CardWidget/CardWidget';
import { AppBar, Container, Toolbar } from '@mui/material';
import MenuDropdown from '../Menudropdown/MenuDropdown';
import { Link } from "react-router-dom";

import { ItemListContainer } from '../itemListContainer/itemListContainer';

const NavBar = () => {
    const [items] = useContext(ItemListContainer);
    return (
        <AppBar position='static' className='contentNavBar'>
            <Container max maxWidth="x1">
                <Toolbar disableGutters >
                    <Link to={"/HomePage"} >Home</Link>
                    <MenuDropdown />
                    <Link to={"/Contact"} >Contact</Link>
                    <Link to={"/Shop"} >
                        <CardWidget />
                        <span>{items.length}</span>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;