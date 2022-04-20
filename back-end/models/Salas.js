const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaSchema = new Schema({

    name: {
        type: String
    },

    dia: String,

  
            
        movies:  
            [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        
    }]


},
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
const Salas = mongoose.model("Salas", salaSchema)


module.exports = Salas;