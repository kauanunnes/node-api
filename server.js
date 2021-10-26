const express = require('express')

const app = express()

const port = 3000
const knex = require('knex')
const knexConfig = require('./knexfile')
const knexConnection = knex(knexConfig.development)


app.listen(port, () => {
  console.log(`I'm listening on http://localhost:${port}`);
})

const router = require('./src/router')
app.use('/', router)