const express = require('express')
const userController = require('./controllers/userController')
const sectorController = require('./controllers/sectorController')
const positionController = require('./controllers/positionController')

const router = express.Router()

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.put('/user/', userController.createUser)
router.patch('/user/:id', userController.editUser)
router.delete('/user/:id', userController.deleteUser)


router.get('/sector', sectorController.getSectors)
router.get('/sector/:id', sectorController.getSector)
router.put('/sector/', sectorController.createSector)
router.patch('/sector/:id', sectorController.editSector)
router.delete('/sector/:id', sectorController.deleteSector)


router.get('/position', positionController.getPosition)
router.get('/position/:id', positionController.getPosition)
router.put('/position/', positionController.createPosition)
router.patch('/position/:id', positionController.editPosition)
router.delete('/position/:id', positionController.deletePosition)

module.exports = router