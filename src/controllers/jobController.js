const knex = require('knex')
const knexConfig = require('../../knexfile')
const knexConnection = knex(knexConfig.development)

exports.getPositions = async (req, res) => {
  try { 
    let data = await knexConnection.select().table('jobs')
    res.send(data)
  } catch (error) {
    console.log(error);
  }
}

exports.getPosition = (req, res) => {
  const id = req.params.id
  res.send(id)
}

exports.createPosition = (req, res) => {
  res.send('create position')
}

exports.editPosition = (req, res) => {
  res.send(`editing the position who has this id: ${req.params.id}`)
}

exports.deletePosition = (req, res) => {
  res.send(`deleting the position who has this id: ${req.params.id}`)
}