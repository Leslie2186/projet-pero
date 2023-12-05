import { React, useEffect, useState } from "react";
import "./Addcity.css";
import axios from "axios";

function Addcity() {
  const [countries, setCountries] = useState();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  }, []);

  return (
    <div className="formulairePostCity">
      <h1>Ajouter une nouvelle ville</h1>
      <div className="containerFormCity">
        <form onSubmit={handleSubmit} className="formCities">
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
          <div>
            <input type="submit" value="Submit" className="buttonSubmit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addcity;
