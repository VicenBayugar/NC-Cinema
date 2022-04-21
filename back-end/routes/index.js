const express = require('express');
const routes = express.Router();
const controller = require("../controllers/movies");


routes.post('/create', controller.moviesCreate);
routes.get('/', controller.index);
routes.get('/:id', controller.moviesId);
routes.put('/:id', controller.moviesUpdate);
routes.get('/:id/butacas', controller.moviesButacas);
routes.put('/:title/butacas', controller.updateButacas);
routes.delete('/:id', controller.moviesDelete);


module.exports = routes;