import express from "express"
import morgan from "morgan"
import cors from "cors"
import mongoose from "mongoose"
import { DB_URL } from "./config.js"
import rutasJuegos from "./Routes/Juegos.routes.js"

const conexion = DB_URL

mongoose.connect(conexion).then()

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'))
app.use(rutasJuegos)

app.use( (req, res) => {
  res.status(404).send({
    message: "No se encontró la ruta solicitada"
  })
})

//app.get("/", (req, res) => { res.send("Hello World!") });

export default app