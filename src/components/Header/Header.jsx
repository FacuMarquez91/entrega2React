import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const tituloPag = "CdelU Store";

const Header = () => {
  return (
    <div>

    <div className="Header">

    </div>  

    <div className="header_title">

      <Link to="/" className="header_link" >

      <h1 >{tituloPag.toUpperCase()} </h1>

      </Link>

    </div>            

  </div>

);
};

export default Header;
