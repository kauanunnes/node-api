const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('deu bom').status(200)
})

app.listen(port, () => {
  console.log(`Eu estou escutando na porta ${port}`);
})