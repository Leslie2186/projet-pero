import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import globeTerrestre from "../../assets/globeterretre.png";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={globeTerrestre} alt="Globe terrestre" />
      </div>
      <div className="menus">
        <Link to="/">Accueil</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/Modifcities">Dashboard des villes</Link>
        <Link to="/Modifcountries">Dashboard des pays</Link>
      </div>
    </nav>
  );
}

export default Navbar;
