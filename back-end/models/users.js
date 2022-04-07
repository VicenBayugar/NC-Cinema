const monogoose = require("mongoose")

const UserSchema = new monogoose.Schema(
    {
       
        name:{
            type:String
        },
        apellido:{
            type:String
        },
        email:{
            type:String,
            unique: true    
        },
        password:{
            type:String
        },
        documento:{
            type:String,
            unique: true
        },
        typeDoc:{
            type:String
        },
        role: {
            type: ["user", "admin"],
            default: "user"

        },
        peliculasCompradas:{
            type:Array
        },
        butacasReservadas:{
            type:Array
        }

        
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false
    }
);
module.exports = monogoose.model("users", UserSchema)