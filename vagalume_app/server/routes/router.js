const express = require('express')
const route = express.Router()

const services = require('../services/render')
const cameraController = require('../controllers/cameraController')
const estabelecimentoController = require('../controllers/estabelecimentoController')
const gestorController = require('../controllers/gestorController')

/**
 * @description Root Route
 * @method GET /
 */

route.get('/', services.homeRoutes)

/**
 * @description add camera
 * @method GET /add-camera
 */

route.get('/add-camera', services.add_camera)
route.get('/add-gestor', services.add_gestor)
route.get('/add-estabelecimento', services.add_estabelecimento)


/**
 * @description update camera
 * @method GET /update-camera
 */

route.get('/update-camera', services.update_camera)
route.get('/update-gestor', services.update_gestor)
route.get('/update-estabelecimento', services.update_estabelecimento)



// API
route.post('/api/cameras', cameraController.create)
route.get('/api/cameras', cameraController.find)
route.put('/api/cameras/:id', cameraController.update)
route.delete('/api/cameras/:id', cameraController.delete)


route.post('/api/estabelecimentos', estabelecimentoController.create)
route.get('/api/estabelecimentos', estabelecimentoController.find)
route.put('/api/estabelecimentos/:id', estabelecimentoController.update)
route.delete('/api/estabelecimentos/:id', estabelecimentoController.delete)

route.post('/api/gestores', gestorController.create)
route.get('/api/gestores', gestorController.find)
route.put('/api/gestores/:id', gestorController.update)
route.delete('/api/gestores/:id', gestorController.delete)


module.exports = route