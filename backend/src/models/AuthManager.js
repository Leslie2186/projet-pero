const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "users" });
  }

  // The C of CRUD - Create operation
  /*
  async create(auth) {
    // Execute the SQL INSERT query to add a new auth to the "auth" table
    const [result] = await client.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [auth.mail, auth.hash]
    );
    // Return the ID of the newly inserted user
    return result.insertId;
  }
*/
  // The Rs of CRUD - Read operations

  async readByEmail(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }
}

module.exports = AuthManager;
