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
            const movie = await dbMongo.findByIdAndUpdate(
                req.params.id,
                req.body
            );
            const movieUpdate = await movie.save();
            // return res.send("movies update")
            return res.status(200).json({
                movieUpdate,
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home");
        }
    },
    moviesDelete: async (req, res, next) => {
        try {
            const movie = await dbMongo.findByIdAndDelete(req.params.id);

            if (!movie) res.status(404).send("No item found");
            res.status(200).send("Pelicula borrada con un ëxito exitoso!");
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

module.exports = controller;
