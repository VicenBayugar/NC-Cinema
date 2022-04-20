const mongoose = require('mongoose');
//const  Schema  = mongoose.Schema;

const CarteleraSchema = new mongoose.Schema({
       
    // fechaDia: [
    //     {Dia:{ 
    //         type :Date}}, 
    //     {horas:{
    //         type :[Date]}}],
    // asientos:
    //         [{salaNombre:{type: Number},
    //         estado:{
    //             type:Boolean}}, 
    //         {numero:{
    //             type:Number}
    //         }] 
    // fechaDia: [
    //     {Dia:{ 
    //         type :Date}}, 
    //     {horas:{
    //         type :[Date]}},
    //     {asientos:
    //         [{salaNombre:{type: Number},
    //         estado:{
    //             type:Boolean}}, 
    //         {numero:{
    //             type:Number}
    //         }]} 
        
    //     ],
    // movie: {
    //     type: mongoose.Schema.Types.ObjectId
    // },
    // sala: {
    //     type: mongoose.Schema.Types.ObjectId
    // }
        salaId: {
            type: mongoose.Schema.Types.ObjectId
        },
        movie: {
            type: [mongoose.Schema.Types.ObjectId]
        },
        diasHorarios:{ 
        type :Date},
        horas: [
            {horas:{
                type :[Date]}},
            {asientos:
                [
                {salaNombre:{type: String},
                estado:{
                    type:Boolean}}, 
                {numero:{
                    type:Number}
                }]} 
            
            ]
        
       
    
    },
    {
        timestamps: true, // TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
// REVIEW: const Cartelera = mongoose.model("cartelera", carteleraSchema)


module.exports =  mongoose.model("carteleras", CarteleraSchema)