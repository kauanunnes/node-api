const path = require('path')

require('dotenv').config()

module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.PG_CONNECTION_STRING,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 200
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      tableName: "knex_seeds",
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },

};
