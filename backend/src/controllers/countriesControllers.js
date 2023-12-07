const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browseCountries = async (req, res, next) => {
  try {
    // Fetch all countries from the database
    const countries = await tables.countries.readAll();

    // Respond with the cities in JSON format
    res.json(countries);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation

const readCountry = async (req, res, next) => {
  try {
    // Fetch a specific country from the database based on the provided ID
    const country = await tables.countries.read(req.params.id);

    // If the country is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the country in JSON format
    if (country == null) {
      res.sendStatus(404);
    } else {
      res.json(country);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

const addCountry = async (req, res, next) => {
  // Extract the country data from the request body
  const country = req.body;

  try {
    // Insert the country into the database
    const insertId = await tables.countries.createCountry(country);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted country
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const updateCountry = async (req, res, next) => {
  const putCountry = req.body;

  try {
    // Fetch a specific city from the database based on the provided ID
    const result = await tables.countries.update(req.params.id, putCountry);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the city in JSON format
    if (result.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const deleteCountry = async (req, res, next) => {
  try {
    await tables.countries.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browseCountries,
  readCountry,
  updateCountry,
  addCountry,
  deleteCountry,
};
