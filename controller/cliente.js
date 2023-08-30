import ClienteModel from "../model/cliente.js"

export default class ClienteController {
    static async getClient(req,res,next){

        try {
            const cliente = await ClienteModel.getClient(parseInt(req.params.id))
            console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }
    static async getAllClient(req,res,next){

        try {
            const cliente = await ClienteModel.getAllClient()
            console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }
    static async createClient(req,res,next){

    try {
            const cliente = await ClienteModel.createClient(req.body)
            res.status(200).json(cliente);
    } catch (error) {
            next(error); 
    }  
        //console.log(error.message)            
        // res.status(error.status).json({message: error })
        
    }
    static async deleteClient(req,res,next){

        try {
            const cliente = await ClienteModel.deleteClient(parseInt(req.params.id))
            console.log(cliente)            
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }
    static async updateClient(req,res,next){

        try {
            const cliente = await ClienteModel.updateClient(parseInt(req.params.id),req.body)
            //console.log(cliente)
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }
}