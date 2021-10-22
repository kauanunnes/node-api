const express = require('express')

const app = express()

const port = 3000
const knex = require('knex')
const knexConfig = require('./knexfile')
const knexConnection = knex(knexConfig.main)

const router = require('./src/router')

app.use('/', router)



try {
  console.log(knexConnection);
  knexConnection.schema.createTable('test', table => {
    table.increments('id')
  })
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`Eu estou escutando na porta ${port}`);
})