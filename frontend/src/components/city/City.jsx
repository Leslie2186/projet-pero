import React from "react";
import { Link } from "react-router-dom";
import "./City.css";

function City({ city }) {
  return (
    <div className="containCity">
      <div>
        <h2>{city.city}</h2>
        <h3>{city.country}</h3>
      </div>
      <img src={city.picture} alt={city.city} />
      <Link to={`/cities/${city.citiesId}`}>
        <p>En savoir plus ...</p>
      </Link>
    </div>
  );
}

export default City;
