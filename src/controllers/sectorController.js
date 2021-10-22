exports.getSectors = (req, res) => {
  res.send('setores')
}

exports.getSector = (req, res) => {
  const id = req.params.id
  res.send(id)
}

exports.createSector = (req, res) => {
  res.send('create sector')
}

exports.editSector = (req, res) => {
  res.send(`editing the sector who has this id: ${req.params.id}`)
}

exports.deleteSector = (req, res) => {
  res.send(`deleting the sector who has this id: ${req.params.id}`)
}