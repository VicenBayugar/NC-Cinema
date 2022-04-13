const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    //Leer el token de header
    let token = req.header("x-auth-token");

    //Revisar si no hay token
    if (!token) {
        return res.status(404).json({ msg: "No hay token, permiso no valido" });
    }

    //Validar el token
    try {
        const verify = jwt.verify(token, process.env.SECRET);
        req.user = verify.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token no válido" });
    }
};

