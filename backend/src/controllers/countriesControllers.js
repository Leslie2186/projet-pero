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

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browseCountries,
  // edit,
  addCountry,

  // destroy,
};
