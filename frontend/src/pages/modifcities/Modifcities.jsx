import { React, useEffect, useState } from "react";
import connexion from "../../services/connexion";
import NavbarDashboard from "../../components/navbardashboard/NavbarDashboard";
import "./Modifcities.css";

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
      const myCities = await connexion.get(`/cities`).then((res) => res.data);
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
      const response = await connexion.post(`/cities`, cityValue);

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
      await connexion.put(`/cities/${cityValue.citiesId}`, cityValue);
      getCities();
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    getCountries();
    getCities();
  }, []);

  const deleteCity = async (id) => {
    try {
      await connexion.delete(`/cities/${id}`);
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
      <NavbarDashboard />
      <div className="formulaireTabgestion">
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
                La monnaie utilisée :
                <input
                  type="text"
                  name="cash"
                  value={cityValue.cash}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Image de la ville :
                <input
                  type="text"
                  name="picture"
                  value={cityValue.picture}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Heure d'ensoleillement/an :
                <input
                  type="number"
                  name="sunshine"
                  value={cityValue.sunshine}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 1 à voir :
                <input
                  type="text"
                  name="monuments0"
                  value={cityValue.monuments0}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 2 à voir :
                <input
                  type="text"
                  name="monuments1"
                  value={cityValue.monuments1}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 3 à voir :
                <input
                  type="text"
                  name="monuments2"
                  value={cityValue.monuments2}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 4 à voir :
                <input
                  type="text"
                  name="monuments3"
                  value={cityValue.monuments3}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 5 à voir :
                <input
                  type="text"
                  name="monuments4"
                  value={cityValue.monuments4}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 6 à voir :
                <input
                  type="text"
                  name="monuments5"
                  value={cityValue.monuments5}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Monument 7 à voir :
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
                <th>Id</th>
                <th>Villes</th>
                <th>Images</th>
                <th>Supprimer</th>
                <th>Modifier</th>
              </thead>
              <tbody>
                {cities.map((city) => {
                  return (
                    <tr key={city.citiesId}>
                      <td>{city.citiesId}</td>
                      <td>{city.city}</td>
                      <td>
                        <img src={city.picture} alt={city.city} />
                      </td>
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
    </div>
  );
}

export default Modifcities;
