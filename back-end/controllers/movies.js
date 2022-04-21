const dbMongo = require("../models/movies");

const controller = {
  index: async (req, res, next) => {
    try {
      const response = await dbMongo.find();
      // return res.send("exito")
      return res.status(200).json({
        total: response.length,
        response,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error consulta db home");
    }
  },
  moviesId: async (req, res, next) => {
    try {
      const response = await dbMongo.findById(req.params.id);
      // return res.send("movies id")
      return res.status(200).json({
        response,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error consulta db home");
    }
  },
  moviesCreate: async (req, res, next) => {
    try {
      const movie = new dbMongo({ ...req.body });

      await movie.save();

      res.status(200).json({
        msg: "Pelicula creada exitosamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Algo salio mal en movie controllers");
    }
  },
  moviesUpdate: async (req, res, next) => {
    try {
      const movie = await dbMongo
        .findById(req.params.id)
        .updateOne({ ...req.body });
      return res.status(200).json({
        movie,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error consulta db home");
    }
  },
  moviesButacas: async (req, res) => {
    try {
      const movie = await dbMongo.findById(req.params.id);

      const disponibles = movie.butacas.filter(
        (butaca) => butaca.state === false
      );
      // console.log(disponibles);

      return res.status(200).json({
        butacas: movie.butacas,
        disponibles,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error consulta db  butaca");
    }
  },
  updateButacas: async (req, res) => {
    try {
      const movie = await dbMongo.findOne({ title: req.params.title });
      //Defino que butacas, es el array de butacas dentro de sala
      const butacas = movie.butacas;
      // Elijo el asiento por  parametro number
      const number = req.body.number;
      //Busco el asiento que corresponda con el number
      const butaca = butacas.find((el) => el.number == number);
      //Si el estado del butaca no existe(false), lo cambiamos a true y visceversa
      butaca.state = !butaca.state ? true : false;
      //Guardamos las modificaciones
      movie.save();

      return res.status(200).json({
        butacas: movie.butacas,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error consulta db upadate butaca");
    }
  },
  moviesDelete: async (req, res, next) => {
    try {
      const movie = await dbMongo.findByIdAndDelete(req.params.id);

      if (!movie) res.status(404).send("No item found");
      res.status(200).send("Pelicula borrada con un ëxito exitoso!");
    } catch (error) {
      res.status(404).send(error);
    }
  },
};

module.exports = controller;
