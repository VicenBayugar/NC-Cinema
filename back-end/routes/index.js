const express = require('express');
const routes = express.Router();
const controller = require("../controllers/movies");
const auth = require("../middlewares/auth");

routes.post('/create', controller.moviesCreate);
routes.get('/', controller.index);
routes.get('/:id', controller.moviesId);
routes.put('/:id', controller.moviesUpdate);
routes.delete('/:id', controller.moviesDelete);


module.exports = routes;