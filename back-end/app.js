const express = require('express');
const path = require('path');
const app = express();
const home = require('./routes/index');

 require('dotenv').config();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/movies",home);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})