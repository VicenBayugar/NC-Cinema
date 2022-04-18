const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const cateleraSchema = new Schema({
       
    fechaDia: [
        {Dia:{ 
            type :Date}}, 
        {horas:{
            type :[Date]}}],
    asientos:
            [{salaNombre:{type: Number},
            estado:{
                type:Boolean}}, 
            {numero:{
                type:Number}
            }] 
    },
    {
        timestamps: true, // TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
const Salas = mongoose.model("cartelera", carteleraSchema)


module.exports = Salas;