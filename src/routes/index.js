import express from "express"
import carros from "./carrosRoutes.js"


const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Loja Carros de Luxo"));

    app.use(express.json(), carros)
}

export default routes