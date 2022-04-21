const express = require('express');
const routes = express.Router();
const userController = require("../controllers/userController");
const userValidations = require('../middlewares/userValidations');
const loginValidations = require('../middlewares/loginValidations')


routes.get("/", userController.admin); //Info para que el admin sepa cuantos usuarios hay
routes.delete("/:id", userController.deleteUser); //El admin puede eliminar usuarios
routes.post("/createUser", userValidations, userController.createUser); //crear un usuario
routes.post("/login", loginValidations, userController.login)
routes.get("/:id",  userController.detailUser); //detalle del usuario
routes.put("/:id", userController.updateUser); //detalle del usuario

// routes.get("/users/login", userController.login)

module.exports = routes;