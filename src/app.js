import express from "express"
import conectionDB from "../config/dbConnect.js"
import routes from "./routes/index.js";

const conection = await conectionDB();

conection.on("error", (erro) => {
    console.error("Erro ao conectar com o banco de dados", erro)
});

conection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!")
})

const app = express();
routes(app)

export default app