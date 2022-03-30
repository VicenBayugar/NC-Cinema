import express from "express"
const app = express()

import { config } from "dotenv"
config()


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})