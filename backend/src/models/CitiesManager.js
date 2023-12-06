const AbstractManager = require("./AbstractManager");

class CitiesManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "cities" as configuration
    super({ table: "cities" });
  }

  // The C of CRUD - Create operation

  async createCity(city) {
    // Execute the SQL INSERT query to add a new city to the "cities" table
    const [result] = await this.database.query(
      `insert into ${this.table} (city, countries_id, cash, picture, sunshine, monuments0, monuments1, monuments2, monuments3, monuments4, monuments5, monuments6) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        city.city,
        city.countries_id,
        city.cash,
        city.picture,
        city.sunshine,
        city.monuments0,
        city.monuments1,
        city.monuments2,
        city.monuments3,
        city.monuments4,
        city.monuments5,
        city.monuments6,
      ]
    );

    // Return the ID of the newly inserted city
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cities by its ID
    const [rows] = await this.database.query(
      `SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, cash, picture, sunshine, monuments0, monuments1, monuments2, monuments3, monuments4, monuments5, monuments6, country, flag, language FROM ${this.table} INNER JOIN countries ON ${this.table}.countries_id = countries.id WHERE ${this.table}.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all cities from the "cities" table
    const [rows] = await this.database.query(
      `SELECT cities.id AS citiesId, countries.id AS countriesId, countries_id, city, picture, country, flag FROM ${this.table} INNER JOIN countries ON ${this.table}.countries_id = countries.id`
    );

    // Return the array of cities
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item
  async update(id, putCity) {
    // Execute the SQL SELECT query to retrieve a specific cities by its ID
    const [rows] = await this.database.query(
      `UPDATE ${this.table} set city = ?, countries_id = ?, cash = ?, picture = ?, sunshine = ?, monuments0 = ?, monuments1 = ?, monuments2 = ?, monuments3 = ?, monuments4 = ?, monuments5 = ?, monuments6 = ? WHERE id = ?`,
      [
        putCity.city,
        putCity.countries_id,
        putCity.cash,
        putCity.picture,
        putCity.sunshine,
        putCity.monuments0,
        putCity.monuments1,
        putCity.monuments2,
        putCity.monuments3,
        putCity.monuments4,
        putCity.monuments5,
        putCity.monuments6,
        id,
      ]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a city by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the city
    return result;
  }
}

module.exports = CitiesManager;
