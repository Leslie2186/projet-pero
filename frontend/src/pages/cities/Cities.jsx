import React from "react";
import { useLoaderData } from "react-router-dom";
import City from "../../components/city/City";
import "./Cities.css";

function Cities() {
  const cities = useLoaderData();

  return (
    <div className="citiesList">
      <h1>Des belles villes pour des belles vacances</h1>
      <div className="containCities">
        {cities.map((city) => (
          <City key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}

export default Cities;
