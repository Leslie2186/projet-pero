const AbstractManager = require("./AbstractManager");

class CitiesManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "cities" as configuration
    super({ table: "cities" });
  }

  // The C of CRUD - Create operation
  /*
  async create(cities) {
    // Execute the SQL INSERT query to add a new cities to the "cities" table
    const [result] = await this.database.query(
      `insert into ${this.table} (city) values (?)`,
      [cities.city]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
*/
  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cities by its ID
    const [rows] = await this.database.query(
      `SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, cash, picture, sunshine, monuments0, monuments1, monuments2, monuments3, monuments4, monuments5, monuments6, country, flag, language FROM ${this.table} INNER JOIN countries ON cities.countries_id = countries.id WHERE cities.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all cities from the "cities" table
    const [rows] = await this.database.query(
      `SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, picture, country, flag FROM ${this.table} INNER JOIN countries ON cities.countries_id = countries.id`
    );

    // Return the array of cities
    return rows;
  }

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

module.exports = CitiesManager;
