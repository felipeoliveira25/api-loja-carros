import mongoose from "mongoose";

async function conectionDB(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}
export default conectionDB

//aqui utiliza o mongoose para conectar-se com o banco de dados feito em mongoDB