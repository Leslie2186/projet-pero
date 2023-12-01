const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of cities
router.get("/cities", itemControllers.browseCities);

// Route to get a specific city by ID
router.get("/cities/:id", itemControllers.read);

// Route to add a new city
router.post("/cities", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
