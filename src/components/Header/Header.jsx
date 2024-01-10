import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const tituloPag = "CdelU Store";

const Header = () => {
  return (
    <div className="Header">
      
      
        <Link to="/">
        <h1>{tituloPag.toUpperCase()}</h1>
        </Link>
      
    </div>
  );
};

export default Header;
