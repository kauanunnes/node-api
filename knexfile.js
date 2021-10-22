const path = require('path')

require('dotenv').config()

module.exports = {
  main: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD
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
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },

};
