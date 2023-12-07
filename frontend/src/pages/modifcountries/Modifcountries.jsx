import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Modifcountries.css";

function Modifcountry() {
  const [countries, setCountries] = useState([]);
  const [countryValue, setCountryValue] = useState({
    country: "",
    flag: "",
    language: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCountryValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Envoi des données au backend en utilisant Axios
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/countries`,
        countryValue
      );

      if (response.status === 201) {
        console.info("Données enregistrées avec succès !");
        // Vous pouvez effectuer d'autres actions après la soumission réussie.
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

  useEffect(() => {
    getCountries();
  }, []);

  const deleteCountry = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/countries/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const loadCountry = (countryToUpdate) => {
    setCountryValue(countryToUpdate);
  };

  const putCountry = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/countries/${countryValue.id}`,
        countryValue
      );
      getCountries();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (countryValue.id) {
      putCountry(event);
    } else {
      handleSubmit(event);
    }
  };

  return (
    <div className="dashboard">
      <div className="formulairePostCountry">
        <h1>Ajouter, modifier ou supprimer un pays</h1>
        <div className="containerFormCountry">
          <form onSubmit={handleRequest} className="formCountries">
            <label>
              Nouveau pays visité :{" "}
              <input
                type="text"
                name="country"
                value={countryValue.country}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Le drapeau du pays :{" "}
              <input
                type="text"
                name="flag"
                value={countryValue.flag}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              La langue du pays :{" "}
              <input
                type="text"
                name="language"
                value={countryValue.language}
                onChange={handleChange}
                required
              />
            </label>
            <div className="containSubmit">
              <button type="submit" className="buttonSubmit">
                {countryValue.id ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="containerTableCity">
        <div className="tableDashboard">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>country</th>
                <th>flag</th>
                <th>language</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => {
                return (
                  <tr key={country.id}>
                    <td>{country.id}</td>
                    <td>{country.country}</td>
                    <td>{country.flag}</td>
                    <td>{country.language}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => deleteCountry(country.id)}
                        className="buttonSuppression"
                      >
                        Supprimer
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => loadCountry(country)}
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

export default Modifcountry;
