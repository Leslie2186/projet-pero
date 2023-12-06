const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
/*
const itemControllers = require("./controllers/itemControllers");
*/
const citiesControllers = require("./controllers/citiesControllers");
const countriesControllers = require("./controllers/countriesControllers");
const validateCities = require("./middlewares/validateCities");
const validateCountries = require("./middlewares/validateCountries");

// Route to get a list of cities
router.get("/cities", citiesControllers.browseCities);

// Route to get a list of countries
router.get("/countries", countriesControllers.browseCountries);

// Route to get a specific city by ID
router.get("/cities/:id", citiesControllers.readCity);

// Route to add a new city
router.post("/cities", validateCities, citiesControllers.addCity);

// Route to add a new country
router.post("/countries", validateCountries, countriesControllers.addCountry);

// Route to update a city
router.put("/cities/:id", validateCities, citiesControllers.updateCity);

// Route to update a country
router.put(
  "/countries/:id",
  validateCountries,
  countriesControllers.updateCountry
);

// Route to delete a specific city by ID
router.delete("/cities/:id", citiesControllers.deleteCity);

/* ************************************************************************* */

module.exports = router;
