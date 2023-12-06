import React from "react";
import { useLoaderData } from "react-router-dom";
import "./OneCity.css";
import soleil from "../../assets/soleil.png";
import monument from "../../assets/monuments.png";
import france from "../../assets/france.png";
import italie from "../../assets/italien.png";
import irlande from "../../assets/irlande.png";
import croatie from "../../assets/croatie.png";
import espagne from "../../assets/espagne.png";

function OneCity() {
  const city = useLoaderData();
  let pays;

  if (city.flag === "FR") {
    pays = france;
  } else if (city.flag === "IT" || city.flag === "SI") {
    pays = italie;
  } else if (city.flag === "IR") {
    pays = irlande;
  } else if (city.flag === "CR") {
    pays = croatie;
  } else if (city.flag === "ES") {
    pays = espagne;
  }

  return (
    <div className="containerOneCity">
      <div className="containOneCity">
        <div className="containerTitle">
          <img src={pays} alt="Drapeau du pays" className="drapeaux" />
          <div>
            <h2>{city.city.toUpperCase()}</h2>
            <h3>{city.country}</h3>
          </div>
        </div>
        <img src={city.picture} alt={city.city} className="imgCity" />
        <div className="containerInfos">
          <div className="infos">
            <p>Monnaie du pays : {city.cash} </p>
            <p>Langue parlée : {city.language}</p>
            <div className="containSoleil">
              <img src={soleil} alt="Soleil" className="soleil" />
              <p>h/an : {city.sunshine} </p>
            </div>
          </div>
          <div className="monuments">
            <h4>LES VISITES A FAIRE : </h4>
            <ul>
              <li>
                <img src={monument} alt="Monument0" className="monument" />
                {city.monuments0}
              </li>
              <li>
                <img src={monument} alt="Monument1" className="monument" />
                {city.monuments1}
              </li>
              <li>
                <img src={monument} alt="Monument2" className="monument" />
                {city.monuments2}
              </li>
              <li>
                <img src={monument} alt="Monument3" className="monument" />
                {city.monuments3}
              </li>
              <li>
                <img src={monument} alt="Monument4" className="monument" />
                {city.monuments4}
              </li>
              <li>
                <img src={monument} alt="Monument5" className="monument" />
                {city.monuments5}
              </li>
              {city.monuments6 ? (
                <li>
                  <img src={monument} alt="Monument6" className="monument" />
                  {city.monuments6}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCity;
