const path = require('path')
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT

const router = require('./src/router')

app.listen(port, () => {
  console.log(`I'm listening on http://localhost:${port}`);
})


app.use(express.urlencoded({
  extended: true
}))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  app.use(cors());
  next();
})

app.use(cors());

app.use('/', router)
