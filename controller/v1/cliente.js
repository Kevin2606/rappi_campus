import ClienteModel from "../../model/v1/cliente.js"
import { crearToken } from "../../middleware/jwt.js";
import { login, register } from "../../helper/auth.js";
import { clienteSchema } from "../../schemas/schemas.js";

export default class ClienteController {

    static async loginClient(req,res,next){
        try {
            const user = await login(req.body, "clientes");
            //TODO: Comprobar validaciones de logins y registros en todos los controladores
            if (user.status === 400)
                throw { status: 400, message: "Usuario no encontrado" };
            const token = await crearToken(user._id.toString(), "clientes");
            res.status(200).json({ JWT:token, Info:"Usuario logueado correctamente." });
        } catch (error) {
            
            next(error);
        }
    }

    static async registerClient(req,res,next){
        try {
            const validacion = clienteSchema.safeParse(req.body);
            if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`)});
            const user = await register(req.body, "clientes");                        
            const token = await crearToken(user._id.toString(), "clientes");
            res.status(200).json({JWT:token, message: "Token creado.",Info:"Usuario registrado correctamente." });
        } catch (error) {            
            next(error);
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