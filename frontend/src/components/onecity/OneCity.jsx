import React from "react";
import { useLoaderData } from "react-router-dom";
import "./OneCity.css";

function OneCity() {
  const city = useLoaderData();
  return (
    <div className="containOneCity">
      <div className="containerTitle">
        <h2>{city.city}</h2>
        <h3>{city.country}</h3>
      </div>
      <img src={city.picture} alt={city.city} />
      <div className="containerInfos">
        <div className="infos">
          <p>Monnaie du pays : {city.cash} </p>
          <p>Langue parlé : {city.language}</p>
          <p>Heures d'ensolleillement par an : {city.sunshine} </p>
        </div>
        <div className="monuments">
          <h4>LES VISITES A FAIRE : </h4>
          <ul>
            <li>{city.monuments0}</li>
            <li>{city.monuments1}</li>
            <li>{city.monuments2}</li>
            <li>{city.monuments3}</li>
            <li>{city.monuments4}</li>
            <li>{city.monuments5}</li>
            <li>{city.monuments6}</li>
            <li>{city.monuments7}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OneCity;
