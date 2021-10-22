exports.getPositions = (req, res) => {
  res.send('position')
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