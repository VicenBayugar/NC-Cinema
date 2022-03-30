import mongoose from "mongoose";


const dbConnect = () => {

    const DB_URI_MONGO = process.env.URI_MONGO;
    mongoose.connect(DB_URI_MONGO, {
        useNewUrlParser: true,
        useUniFiedTopology: true,
    },
    (err, res) => {
        (!err) ? console.log('CONEXION CORRECTA'): console.log('ERROR DE CONEXION');
    }
        
    )

}

export default dbConnect;