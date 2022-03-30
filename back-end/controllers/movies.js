// const dbMongo= require('/config/mongo.js');

const controller = {
    index: async (req, res, next) => {
        try {
        //    const response = await dbMongo.find();
            return res.send("exito")
        //    return res.status(200).json({
            //   response
        //    })
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home")
        }
    },
    moviesId: async (req, res, next) => {
        try {
        //   const response = await dbMongo.findById(req.query.id);)
            return res.send("movies id")
        //    return res.status(200).json({
            //   response
        //    })
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home")
        }
    }
}

module.exports = controller;