const AbstractManager = require("./AbstractManager");

class CountriesManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "cities" as configuration
    super({ table: "countries" });
  }

  // The C of CRUD - Create operation

  async createCountry(country) {
    // Execute the SQL INSERT query to add a new country to the "countries" table
    const [result] = await this.database.query(
      `insert into ${this.table} (country, flag, language) values (?, ?, ?)`,
      [country.country, country.flag, country.language]
    );

    // Return the ID of the newly inserted country
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cities by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE ${this.table}.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all countries from the "countries" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of countries
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item
  async update(id, putCountry) {
    // Execute the SQL SELECT query to retrieve a specific cities by its ID
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET country = ?, flag = ?, language = ? WHERE id = ?`,
      [putCountry.country, putCountry.flag, putCountry.language, id]
    );

    // Return the first row of the result, which represents the item
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a country by its ID
  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the country
    return result;
  }
}

module.exports = CountriesManager;
