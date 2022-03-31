const monogoose = require("mongoose")

const movieSchema = new monogoose.Schema(
    {
        title:{
            type:String
        },
        resume:{
            type:Number
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
            type:Date
        },
        schedule:{
            type:Date
        },
        premiere:{
            type:Boolean
        }

        
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
module.exports = monogoose.model("movies", movieSchema)