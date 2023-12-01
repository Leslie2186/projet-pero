import React from "react";
import { useLoaderData } from "react-router-dom";

function Cities() {
  const cities = useLoaderData();

  return (
    <>
      <h1>Des belles villes pour de belles vacances</h1>
      <div className="containCities">
        {cities.map((city) => (
          <div key={city.id}>
            <h2>{city.city}</h2>
            <img src={city.picture} alt={city.city} />
            <p>Monnaie du pays : {city.cash} </p>
            <p>Heures d'ensolleilement par an : {city.sunshine} </p>
            <div>
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
        ))}
      </div>
    </>
  );
}

export default Cities;
