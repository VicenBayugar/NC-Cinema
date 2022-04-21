const dbMongo = require("../models/users");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const userController = {
  admin: async (req, res) => {
    try {
      let users = await dbMongo.find();
      return res.status(200).json({
        total: users.length,
        users,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("No se puede acceder a usuarios");
    }
  },
  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      await dbMongo.findByIdAndDelete(id);
      return res.status(200).send("¡Usuario eliminado con un exito rotundo!");
    } catch (error) {
      console.log(error);
      res.status(404).send("No se puede acceder a usuarios");
    }
  },
  createUser: async (req, res, next) => {
    try {
      // revisamos si hay errores
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
      }
      //extrae el mail y el password
      const { email, password, documento } = req.body;

      //revisa que el usuario sea único
      let user = await dbMongo.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "El usuario ya existe" });
      }

      let doc = await dbMongo.findOne({ documento });
      if (doc) {
        return res.status(400).json({ msg: "El documento ya existe" });
      }

      //crea el usuario
      user = new dbMongo(req.body);

      //hashear el password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //guarda el usuario
      await user.save();

      //crear y firmar el jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      //firmar el token
      jwt.sign(
        payload,
        process.env.SECRET,
        {
          expiresIn: 3600,
        },
        (error, token) => {
          if (error) throw error;

          //mensaje de confirmación
          res.json({ token });
        }
      );

      res.status(200).json({
        msg: "Usuario creado exitosamente",
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("No se pudo crear el usuario, pancho!!!");
    }
  },
  login: async (req, res, next) => {
    // revisamos si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //extrae el mail y el password
    const { email, password } = req.body;

    try {
      // const {email, password} = req.body;
      const user = await dbMongo.findOne({ email });
      if (!user)
        return res.status(400).json({ error: "Usuario no encontrado" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(400).json({ error: "contraseña no válida" });

      //Si pasa las validaciones crear y firmar el jwt

      const payload = {
        user: {
          id: user.id,
        },
      };

      //firmar el token
      jwt.sign(
        payload,
        process.env.SECRET,
        {
          expiresIn: 3600,
        },
        (error, token, payload) => {
          if (error) throw error;

          //mensaje de confirmación
          res.json({ token, user });
        }
      );
      //   res.header('auth-token', token).json({
      //     error: null,
      //     data: {token}
      // })
    } catch (error) {
      console.log(error);
      res.status(404).send("Credenciales inválidas");
    }
  },
  detailUser: async (req, res, next) => {
    try {
      const user = await dbMongo.findById(req.params.id);

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
      const user = await dbMongo.findByIdAndUpdate(req.params.id, req.body);
      const userUpdate = await user.save();
      // return res.send("movies update")
      return res.status(200).json({
        userUpdate,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error Al actualizar la información de usuario");
    }
  },
};

module.exports = userController;
