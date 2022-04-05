const dbConnect= require('./config/mongo')
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const home = require('./routes/index');
const users = require('./routes/users');

require('dotenv').config();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/movies",home);
app.use("/api/users",users);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
dbConnect();