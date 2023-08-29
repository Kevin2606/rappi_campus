import ClienteModel from "../model/cliente.js"
//import bcrypt from "bcrypt";
import { crearToken } from "../middleware/jwt.js";

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
    static async loginClient(req,res){
            try {
                const { body } = req;
                if (!body.correo || !body.contrasena)
                    throw { status: 400, message: "Faltan datos" };
                const cliente = await ClienteModel.getClientByEmail(body.correo)
                if (!cliente)
                    throw { status: 400, message: "Usuario no encontrado" };
                //const valid = await bcrypt.compare(body.contrasena, cliente.contrasena);
                const valid = body.contrasena === cliente.contrasena;
                if (!valid)
                    throw { status: 400, message: "Contraseña incorrecta" };
                const token = await crearToken(cliente.id_cliente, "clientes")
                res.status(200).json({ token });
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