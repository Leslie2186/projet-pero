const argon2 = require("argon2");
const tables = require("../tables");

const log = async (req, res, next) => {
  try {
    const login = await tables.users.readByEmail(req.body.email);

    if (login) {
      const passwordMatch = await argon2.verify(
        login.password,
        req.body.password
      );

      if (passwordMatch) {
        res.status(201).json({ id: login.id, msg: "Connected" });
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
/*
const add = async (req, res, next) => {
  // Extract the auth data from the request body
  const auth = req.body;

  try {
    // Insert the auth into the database
    const insertId = await tables.auth.create(auth);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted auth
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
*/

// Ready to export the controller functions
module.exports = {
  log,
};
