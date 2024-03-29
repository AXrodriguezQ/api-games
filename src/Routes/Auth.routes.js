import { Router } from "express"
import { creatUsuario, login } from "../Controllers/AuthController.js"

const rutas = Router()

rutas.post('/api/usuarios', creatUsuario)
rutas.post('/api/login', login)

export default rutas