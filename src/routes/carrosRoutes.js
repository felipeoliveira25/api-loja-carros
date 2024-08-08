import express from "express"
import CarroController from "../controllers/carroController.js"


const routes = express.Router()

routes.get("/carros", CarroController.mostrarCarros)
routes.get("/carros/busca", CarroController.mostrarCarrosPorMarca)//modelo da busca: /carros/busca?marca=nomeDaMarca
routes.get("/carros/:id", CarroController.mostrarCarrosPorId)//modelo da busca: /carros/id
routes.post("/carros", CarroController.adicionarCarro)

export default routes