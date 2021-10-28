const express = require('express')
const cors = require('cors')

const app = express()

const port = 3000

app.listen(port, () => {
  console.log(`I'm listening on http://localhost:${port}`);
})

const router = require('./src/router')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
})

app.use(express.urlencoded({
  extended: true
}))
app.use('/', router)