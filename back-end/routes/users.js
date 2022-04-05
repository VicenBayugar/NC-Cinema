const express = require('express');
const routes = express.Router();
const userController = require("../controllers/userController");

// routes.get("/users", userController.admin); //Info para que el admin sepa cuantos usuarios hay
// routes.delete("/users/:id", userController.deleteUser); //El admin puede eliminar usuarios
routes.post("/users/createUser", userController.createUser); //crear un usuario
routes.get("/users/:id", userController.detailUser); //detalle del usuario
routes.put("/users/:id", userController.updateUser); //detalle del usuario

// routes.get("/users/login", userController.login)
routes.post("/users/login", userController.login)

module.exports = routes;