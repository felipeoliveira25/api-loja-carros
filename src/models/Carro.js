import mongoose from "mongoose";


const carroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    maxVelocidade: { type: Number},
    nome: { type: String, required: true},
    preco: { type: Number, required: true},
    anoFabricacao: { type: Date},
    marca: { type: String, required: true}
}, {versionKey: false})

const carro = mongoose.model("carros", carroSchema);

export default carro