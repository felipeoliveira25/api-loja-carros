import carro from "../models/Carro.js";


class CarroController {
    static async mostrarCarros (req, res) {
        try{
            const listaCarros = await carro.find({});//método que pega todos os carros presentes no DB
            res.status(200).json(listaCarros)//caso dê certo, retorna todos os carros listados
        } catch (e) {
            res.status(500).json({ message: `${erro.message} - falha ao buscar os carros presentes na coleção`})
        }
    }

    static async mostrarCarrosPorId (req, res) {
        try{
            const id = req.params.id;
            const carroEncontrado = await carro.findById(id)
            res.status(200).json(carroEncontrado)
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisição do carro`})
        }
    }

    static async adicionarCarro (req, res) {
        const novoCarro = req.body
        try{
            const carroCriado = await carro.create(novoCarro)
            res.status(201).json({ message: "criado com sucesso", carro: carroCriado})
        } catch (e) {
            res.status(500).json({ message: `${erro.message} - Erro ao adicionar carro à coleção!`})
        }
    }

    static async mostrarCarrosPorMarca (req, res) {
        
        const marca = req.query.marca;
        try{
            const carrosPorMarca = await carro.find({ marca: marca})//encontrar apenas os carros onde sua marca seja igual a passada na busca 
            res.status(200).json(carrosPorMarca)
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na busca pelos carros da ${marca}`})
        }
    }
}

export default CarroController