import React from "react";
import { Link } from "react-router-dom";
import "./City.css";
import accrocheTab from "../../assets/accrocheTab2.png";

function City({ city }) {
  return (
    <div className="containAccrocheTab">
      <img src={accrocheTab} alt="Accroche Tableau" className="accrocheTab" />
      <div className="containCity">
        <div>
          <h2>{city.city.toUpperCase()}</h2>
          <h3>{city.country}</h3>
        </div>
        <img src={city.picture} alt={city.city} />
        <Link to={`/cities/${city.citiesId}`}>
          <p>En savoir plus ...</p>
        </Link>
      </div>
    </div>
  );
}

export default City;
