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

// Route to get a list of cities
router.get("/cities", citiesControllers.browseCities);

// Route to get a specific city by ID
router.get("/cities/:id", citiesControllers.readCity);

// Route to add a new city
router.post("/cities", citiesControllers.add);

/* ************************************************************************* */

module.exports = router;
