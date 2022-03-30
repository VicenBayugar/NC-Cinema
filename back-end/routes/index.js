const express = require('express');
const routes = express.Router();
const controller = require("../controllers/movies");

routes.get('/',controller.index);

routes.get('/:id',controller.moviesId);

module.exports = routes;