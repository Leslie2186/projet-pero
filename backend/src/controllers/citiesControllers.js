// Import access to database tables
/*
const client = require("../../database/client");
*/
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browseCities = async (req, res, next) => {
  try {
    // Fetch all cities from the database
    const cities = await tables.cities.readAll();

    // Respond with the cities in JSON format
    res.json(cities);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

/*
const browseCities = (req, res) => {
  const query =
    "SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, picture, country, flag FROM cities INNER JOIN countries ON cities.countries_id = countries.id";
  client
    .query(query)
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
*/

// The R of BREAD - Read operation

const readCity = async (req, res, next) => {
  try {
    // Fetch a specific city from the database based on the provided ID
    const city = await tables.cities.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the city in JSON format
    if (city == null) {
      res.sendStatus(404);
    } else {
      res.json(city);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

/*
const readCity = (req, res) => {
  const id = +req.params.id;

  client
    .query(
      "SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, cash, picture, sunshine, monuments0, monuments1, monuments2, monuments3, monuments4, monuments5, monuments6, country, flag, language FROM cities INNER JOIN countries ON cities.countries_id = countries.id WHERE cities.id = ?",
      [id]
    )
    .then(([city]) => {
      if (city[0] != null) {
        res.status(200).json(city[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
*/
// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.item.create(item);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browseCities,
  readCity,
  // edit,
  add,
  // destroy,
};
