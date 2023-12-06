import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import globeTerrestre from "../../assets/globeterretre.png";

function Navbar() {
  return (
    <nav className="nav">
      <img src={globeTerrestre} alt="Globe terrestre" />
      <Link to="/">Accueil</Link>
      <Link to="/Modifcities">Dashboard des villes</Link>
      <Link to="/Addcountry">Dashboard des pays</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
