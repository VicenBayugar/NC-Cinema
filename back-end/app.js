import express from "express"
import dbConnect from "./config/mongo.js"
const app = express()

import { config } from "dotenv"
config()


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
dbConnect();