const Sala = require("../models/Salas");

const salasController = {
    //Trae las butacas de la sala elegida por Id.
    salaGet: async (req, res) => {
        try {
            const sala = await Sala.findById("6252da12946fb604c307d988");
            res.status(200).json({ sala });
            console.log(sala);
        } catch (error) {
            console.log(error);
            res.status(401).json("Sin datos");
        }
    },
    //Crea una sala y sus butacas
    salaPost: async (req, res) => {
        try {
            const sala = new Sala(req.body);
            await sala.save();
            res.status(200).json({ sala });
        } catch (err) {
            console.log(err);
            res.status(404).json("Sin datos");
        }
    },
    //Selecciona una butaca y le cambia su valor de libre a ocupado, y al reves
    reserva: async (req, res) => {
        try {
            // Traigo la sala por id
            const sala = await Sala.findById("625812391d3db97c5d586442");
            //Defino que butacas, es el array de butacas dentro de sala
            const butacas = sala.butacas;
            // Elijo el asiento por  parametro number
            const number = req.body.number;
            //Busco el asiento que corresponda con el number
            const asiento = butacas.find((el) => el.number == number);
            //Si el estado del asiento no existe(false), lo cambiamos a true y visceversa
            asiento.state = !asiento.state ? true : false;
            //Guardamos las modificaciones
            sala.save();

            res.status(200).json({ asiento });
        } catch (error) {
            res.status(404).json({ error });
            console.log(error);
        }
    },
};

module.exports = salasController;
