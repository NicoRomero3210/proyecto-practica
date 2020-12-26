const routes = require('express').Router()
const {registrarUsuario} = require('../controllers/userController')

// /api/usuarios/registrarse
routes.route('/registrarse').get(registrarUsuario)

module.exports = routes