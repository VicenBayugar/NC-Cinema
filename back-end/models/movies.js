const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
    {
       
        title:{
            type:String
        },
        resume:{
            type:String
        },
        origin:{
            type:String
        },
        genre:{
            type:String
        },
        director:{
            type:String
        },
        actors:{
            type:String
        },
        qualify:{
            type:String
        },
        length:{
            type:Number
        },
        image:{
            type:String
        },
        trailer:{
            type:String
        },
        day:{
            type:String
        },
        schedule:{
            type:String
        },
        premiere:{
            type:Boolean
        }, 
        
        language:{
            type: [String]
        },
        butacas:  [{ 
            number: Number,
            state: Boolean,
            reservation:{type: Date, required: true, default: Date.now } 
        }],
        sala:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Salas'
        },

        
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
module.exports = mongoose.model("movies", movieSchema)