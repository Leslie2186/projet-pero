import { React, useEffect, useState } from "react";
import connexion from "../../services/connexion";
import NavbarDashboard from "../../components/navbardashboard/NavbarDashboard";
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
      const myCountries = await connexion
        .get(`/countries`)
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
      const response = await connexion.post(`/countries`, countryValue);

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
      await connexion.delete(`/countries/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const loadCountry = (countryToUpdate) => {
    setCountryValue(countryToUpdate);
  };

  const putCountry = async () => {
    try {
      await connexion.put(`/countries/${countryValue.id}`, countryValue);
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
      <NavbarDashboard />
      <div className="formulaireTabgestion">
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
              <div className="containSubmitCountry">
                <button type="submit" className="buttonSubmitCountry">
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
                  <th>Id</th>
                  <th>Pays</th>
                  <th>Drapeau</th>
                  <th>Supprimer</th>
                  <th>Modifier</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => {
                  return (
                    <tr key={country.id}>
                      <td>{country.id}</td>
                      <td>{country.country}</td>
                      <td>{country.flag}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => deleteCountry(country.id)}
                          className="buttonSuppressionCountry"
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
    </div>
  );
}

export default Modifcountry;
