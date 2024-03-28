import { Router } from "express";
import { deleteJuego, getJuegos, saveJuegos, updateJuego } from "../Controllers/JuegosController.js";
import { subirImagen } from "../Middleware/Storage.js";

const rutas = Router()

rutas.get('/api/juegos', getJuegos)
rutas.get('/api/juegos/:id', getJuegos)
rutas.post('/api/juegos', subirImagen.single('imagen'), saveJuegos)
rutas.put('/api/juegos/:id', subirImagen.single('imagen'), updateJuego)
rutas.delete('/api/juegos/:id', deleteJuego)

export default rutas;