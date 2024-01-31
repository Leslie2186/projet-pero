import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import connexion from "../../services/connexion";
import City from "../../components/city/City";
import "./Cities.css";

function Cities() {
  const cities = useLoaderData();
  const [allCountries, setAllCountries] = useState();
  const [countryFilter, setCountryFilter] = useState(0);

  const getCountries = async () => {
    try {
      const myCountries = await connexion
        .get(`/countries`)
        .then((res) => res.data);
      setAllCountries(myCountries);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="citiesList">
      <h1>Voyages en mémoire</h1>
      <select
        onChange={(e) => setCountryFilter(+e.target.value)}
        className="selectCountry"
      >
        <option value={0}>Tous les pays</option>
        {allCountries &&
          allCountries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.country}
            </option>
          ))}
      </select>
      <div className="containCities">
        {cities
          .filter(
            (oneCity) =>
              oneCity.countries_id === countryFilter || countryFilter === 0
          )
          .map((city) => (
            <City key={city.id} city={city} />
          ))}
      </div>
    </div>
  );
}

export default Cities;
