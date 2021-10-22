exports.getUsers = (req, res) => {
  res.send('usuarios')
}

exports.getUser = (req, res) => {
  const id = req.params.id
  res.send(id)
}

exports.createUser = (req, res) => {
  res.send('create user')
}

exports.editUser = (req, res) => {

  res.send(`editing the user who has this id: ${req.params.id}`)
}

exports.deleteUser = (req, res) => {
  res.send(`deleting the user who has this id: ${req.params.id}`)
}