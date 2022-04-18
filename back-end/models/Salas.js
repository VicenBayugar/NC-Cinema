const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const salaSchema = new Schema({
       
        name:{
            type:String
        },
        butacas: [{ 
            number: Number,
            state: Boolean,
            reservation:{type: Date, required: true, default: Date.now } 
        }]
    },
    {
        timestamps: true, // TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
const Salas = mongoose.model("Salas", salaSchema)


module.exports = Salas;