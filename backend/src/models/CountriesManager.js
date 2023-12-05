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
  /*
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cities by its ID
    const [rows] = await this.database.query(
      `SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, cash, picture, sunshine, monuments0, monuments1, monuments2, monuments3, monuments4, monuments5, monuments6, country, flag, language FROM ${this.table} INNER JOIN countries ON ${this.table}.countries_id = countries.id WHERE ${this.table}.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }
  */
  /*
  async readAll() {
    // Execute the SQL SELECT query to retrieve all cities from the "cities" table
    const [rows] = await this.database.query(
      `SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, picture, country, flag FROM ${this.table} INNER JOIN countries ON ${this.table}.countries_id = countries.id`
    );

    // Return the array of cities
    return rows;
  }
*/
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CountriesManager;
