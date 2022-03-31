// const dbMongo= require('/config/mongo.js');

const controller = {
    index: async (req, res, next) => {
        try {
          //const response = await dbMongo.find();
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
    },
    moviesCreate: async (req, res, next) => {
        // try {
        //     const movie = new Movie({...req.body})
            
        //     await movie.save();
            
        //     res.status(200).json({
        //         msg: 'Pelicula creada exitosamente',
        //       });
      
        //   } catch (error) {
        //       console.log(error)
        //       res.status(404).send('Algo salio mal en movie controllers')
        //   }
    },
    moviesUpdate: async (req, res, next) => {
        // try {

        // //  await dbMongo.findByIdAndUpdate(req.params.id,req.body));
        // //  await dbMongo.save()
        //     return res.send("movies update")
        // //    return res.status(200).json({
        //     //   response
        // //    })
        // } catch (error) {
        //     console.log(error);
        //     res.status(404).send("Error consulta db home")
        // }
    },
    moviesDelete: async (req, res, next) => {
        // try {
        //     const movie = await dbMongo.findByIdAndDelete(request.params.id);
        
        //     if (!movie) response.status(404).send("No item found");
        //     response.status(200).send();
        //   } catch (error) {
        //     response.status(500).send(error);
        //   }
    }
}

module.exports = controller;


