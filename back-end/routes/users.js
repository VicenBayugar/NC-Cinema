const express = require('express');
const routes = express.Router();
const userController = require("../controllers/userController");
const userValidations = require('../middlewares/userValidations');
const loginValidations = require('../middlewares/loginValidations')

// routes.get("/users", userController.admin); //Info para que el admin sepa cuantos usuarios hay
// routes.delete("/users/:id", userController.deleteUser); //El admin puede eliminar usuarios
routes.post("/users/createUser", userValidations, userController.createUser); //crear un usuario
routes.post("/users/login", loginValidations, userController.login)
routes.get("/users/:id", userController.detailUser); //detalle del usuario
routes.put("/users/:id", userController.updateUser); //detalle del usuario

// routes.get("/users/login", userController.login)

module.exports = routes;