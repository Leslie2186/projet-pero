import { React, useState } from "react";
import axios from "axios";
import "./Addcountry.css";

function Addcountry() {
  const [countryValue, setCountryValue] = useState({
    country: "",
    flag: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCountryValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <div className="formulairePostCountry">
      <h1>Ajouter un nouveau pays</h1>
      <div className="containerFormCountry">
        <form onSubmit={handleSubmit} className="formCountries">
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
          <div>
            <input type="submit" value="Submit" className="buttonSubmit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addcountry;
