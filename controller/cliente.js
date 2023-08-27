import ClienteModel from "../model/cliente.js"

export default class ClienteController {
    static async getClient(req,res){

        try {
            const cliente = await ClienteModel.getClient(parseInt(req.params.id))
            console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async getAllClient(req,res){

        try {
            const cliente = await ClienteModel.getAllClient()
            console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async createClient(req,res){

        try {
            const cliente = await ClienteModel.createClient(req.body)
            console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async deleteClient(req,res){

        try {
            const cliente = await ClienteModel.deleteClient(parseInt(req.params.id))
            console.log(cliente)            
            res.status(200).json(cliente);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
    static async updateClient(req,res){

        try {
            const cliente = await ClienteModel.updateClient(parseInt(req.params.id),req.body)
            console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
}