const express = require('express');
const rutas = express.Router();
const controlador = require("../controllers/salasController")


//Trae las butacas de la sala elegida por Id.
rutas.get('/sala', controlador.salaGet);

//Crea una sala y sus butacas
rutas.post('/sala', controlador.salaPost);

//Selecciona una butaca y le cambia su valor de libre a ocupado, y al reves
rutas.put('/butaca', controlador.reserva);

module.exports = rutas;