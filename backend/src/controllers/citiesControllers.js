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

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const addCity = async (req, res, next) => {
  // Extract the city data from the request body
  const city = req.body;

  try {
    // Insert the city into the database
    const insertId = await tables.cities.createCity(city);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted city
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
  addCity,
  // destroy,
};
