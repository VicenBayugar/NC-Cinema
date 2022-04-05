const dbMongo = require("../models/movies");

const userController = {
    createUser: async (req, res, next) => {
        // validar datos
        //hashear la contraseña
        try {
            const user = new dbMongo({ ...req.body });
            await user.save();
            res.status(200).json({
                msg: "Usuario creado exitosamente",
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("No se pudo crear el usuario, pancho!!!");
        }
    },
    login: async (req, res, next) => {
        try {
            // const {email, password} = req.body;
            const user = await dbMongo.findOne({ email: req.body.email });
            if (!user)
                return res.status(400).json({ error: "Usuario no encontrado" });

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword)
                return res.status(400).json({ error: "contraseña no válida" });

            res.json({
                error: null,
                data: "exito bienvenido",
            });

            //crear token
        } catch (error) {
            console.log(error);
            res.status(404).send("Credenciales inválidas");
        }
    },
    detailUser: async (req, res, next) => {
        try {
            const user = await dbMongo.findById(req.params.id);
            // return res.send("movies id")
            return res.status(200).json({
                user,
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Usuario no encontrado");
        }
    },
    updateUser: async (req, res, next) => {
        //validar que el dato subido sea correcto
        try {
            const user = await dbMongo.findByIdAndUpdate(
                req.params.id,
                req.body
            );
            const userUpdate = await user.save();
            // return res.send("movies update")
            return res.status(200).json({
                userUpdate,
            });
        } catch (error) {
            console.log(error);
            res.status(404).send(
                "Error Al actualizar la información de usuario"
            );
        }
    },
};

module.exports = userController;
