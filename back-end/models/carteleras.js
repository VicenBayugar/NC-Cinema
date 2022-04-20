const mongoose = require('mongoose');
//const  Schema  = mongoose.Schema;

const CarteleraSchema = new mongoose.Schema({

        salaId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "salas"
            },
        movieId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "movies"
            },
        datos: [
                {dia:{
                    type: String}},
                {schedule: [
                            {hora:{
                                type :String}},
                            {butacas:[  
                                        {numero:{
                                                type:Number}},
                                        {estado:{
                                                type:Boolean}} 
                                        
                                    ]} 
            
                            ]}
                
                ]       
       
    },
    {
        timestamps: true, // TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
// REVIEW: const Cartelera = mongoose.model("cartelera", carteleraSchema)


module.exports =  mongoose.model("carteleras", CarteleraSchema)