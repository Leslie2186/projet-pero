import { React, useEffect, useState } from "react";
import "./Modifcities.css";
import axios from "axios";

function Modifcities() {
  const [countries, setCountries] = useState();
  const [cities, setCities] = useState([]);
  const [cityValue, setCityValue] = useState({
    city: "",
    countries_id: 0,
    cash: "",
    picture: "",
    sunshine: "",
    monuments0: "",
    monuments1: "",
    monuments2: "",
    monuments3: "",
    monuments4: "",
    monuments5: "",
    monuments6: "",
  });

  const getCities = async () => {
    try {
      const myCities = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/cities`)
        .then((res) => res.data);
      console.info(myCities);
      setCities(myCities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "countries_id") {
      setCityValue((previousState) => ({
        ...previousState,
        [event.target.name]: +event.target.value,
      }));
    } else {
      setCityValue((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cities`,
        cityValue
      );

      if (response.status === 201) {
        console.info("Données enregistrées avec succès !");
      } else {
        console.error(
          "Erreur lors de la soumission des données :",
          response.statusText
        );
      }
    } catch (error) {
      console.error(
        "Erreur lors de la soumission des données :",
        error.message
      );
    }
  };

  const putCity = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/cities/${cityValue.citiesId}`,
        cityValue
      );
      getCities();
    } catch (error) {
      console.error(error);
    }
  };

  const getCountries = async () => {
    try {
      const myCountries = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/countries`)
        .then((res) => res.data);
      setCountries(myCountries);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
    getCities();
  }, []);

  const deleteCity = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/cities/${id}`
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const loadCity = async (city) => {
    setCityValue(city);
  };

  const handleRequest = (event) => {
    if (cityValue.citiesId) {
      putCity(event);
    } else {
      handleSubmit(event);
    }
  };

  return (
    <div className="dashboard">
      <div className="formulairePostCity">
        <h1>Ajouter, modifier ou supprimer une ville</h1>
        <div className="containerFormCity">
          <form onSubmit={handleRequest} className="formCities">
            <label>
              Nouvelle ville visitée :{" "}
              <input
                type="text"
                name="city"
                value={cityValue.city}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Le pays :{" "}
              <select
                name="countries_id"
                value={cityValue.countries_id}
                onChange={handleChange}
                required
              >
                <option value={0}>Choisir une option</option>
                {countries &&
                  countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.country}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              La monnaie utilisée dans la ville :{" "}
              <input
                type="text"
                name="cash"
                value={cityValue.cash}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Image de la ville :{" "}
              <input
                type="text"
                name="picture"
                value={cityValue.picture}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Heure d'ensoleillement à l'année :{" "}
              <input
                type="number"
                name="sunshine"
                value={cityValue.sunshine}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 1 à voir :{" "}
              <input
                type="text"
                name="monuments0"
                value={cityValue.monuments0}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 2 à voir :{" "}
              <input
                type="text"
                name="monuments1"
                value={cityValue.monuments1}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 3 à voir :{" "}
              <input
                type="text"
                name="monuments2"
                value={cityValue.monuments2}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 4 à voir :{" "}
              <input
                type="text"
                name="monuments3"
                value={cityValue.monuments3}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 5 à voir :{" "}
              <input
                type="text"
                name="monuments4"
                value={cityValue.monuments4}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 6 à voir :{" "}
              <input
                type="text"
                name="monuments5"
                value={cityValue.monuments5}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Monument 7 à voir :{" "}
              <input
                type="text"
                name="monuments6"
                value={cityValue.monuments6}
                onChange={handleChange}
                required
              />
            </label>
            <div className="containSubmit">
              <button type="submit" className="buttonSubmit">
                {cityValue.citiesId ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="containerTableCity">
        <div className="tableDashboard">
          <table>
            <thead>
              <th>id</th>
              <th>City</th>
              <th>Country</th>
              <th>Flag</th>
              <th>Picture</th>
              <th>sunshine</th>
              <th>monuments1</th>
              <th>monuments2</th>
              <th>monuments3</th>
              <th>monuments4</th>
              <th>monuments5</th>
              <th>monuments6</th>
              <th>monuments7</th>
            </thead>
            <tbody>
              {cities.map((city) => {
                return (
                  <tr key={city.citiesId}>
                    <td>{city.citiesId}</td>
                    <td>{city.city}</td>
                    <td>{city.countries_id}</td>
                    <td>{city.flag}</td>
                    <td>
                      <img src={city.picture} alt={city.city} />
                    </td>
                    <td>{city.sunshine}</td>
                    <td>{city.monuments0}</td>
                    <td>{city.monuments1}</td>
                    <td>{city.monuments2}</td>
                    <td>{city.monuments3}</td>
                    <td>{city.monuments4}</td>
                    <td>{city.monuments5}</td>
                    <td>{city.monuments6}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => deleteCity(city.citiesId)}
                        className="buttonSuppression"
                      >
                        Supprimer
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => loadCity(city)}
                        className="buttonModif"
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Modifcities;
