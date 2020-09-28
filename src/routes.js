const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController');
const PersonaController = require('./controllers/PersonaController');


routes.post("/user", UserController.create)
routes.put("/user/:userId", UserController.update)
routes.get("/user", UserController.list)
routes.get("/user/:userId", UserController.show)
routes.delete("/user/:userId", UserController.delete)


routes.post("/persona", PersonaController.create)
routes.put("/persona/:personaId", PersonaController.update)
routes.get("/persona", PersonaController.list)
routes.get("/persona/:personaId", PersonaController.show)
routes.delete("/persona/:personaId", PersonaController.delete)


module.exports = routes;