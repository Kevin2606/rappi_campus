import ClienteModel from "../model/cliente.js"
import { crearToken } from "../middleware/jwt.js";
import { login, register } from "../helper/auth.js";

export default class ClienteController {

    static async loginClient(req,res){
        try {
            const user = await login(req.body, "clientes");
            //TODO: Comprobar validaciones de logins y registros en todos los controladores
            if (user.status === 400)
                throw { status: 400, message: "Usuario no encontrado" };
            const token = await crearToken(user._id.toString(), "clientes");
            res.status(200).json({ token });
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async registerClient(req,res){
        try {
            const user = await register(req.body, "clientes");
            if (user.status === 400)
                throw { status: 400, message: user.message };
            const token = await crearToken(user.insertedId.toString(), "clientes");
            res.status(200).json({ token });
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async getClient(req,res,next){
        try {
            const cliente = await ClienteModel.getClient(parseInt(req.params.id))            
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllClient(req,res,next){
        try {
            const cliente = await ClienteModel.getAllClient()            
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
    }
    static async deleteClient(req,res,next){

        try {
            const cliente = await ClienteModel.deleteClient(parseInt(req.params.id))                       
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }
    static async updateClient(req,res,next){

        try {
            const cliente = await ClienteModel.updateClient(parseInt(req.params.id),req.body)            
            res.status(200).json(cliente);
        } catch (error) {
            next(error); 
        }
    }
}