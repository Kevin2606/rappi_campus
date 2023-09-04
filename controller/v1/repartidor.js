import RepartidorModel from '../../model/v1/repartidor.js';
import { crearToken } from "../../middleware/jwt.js";
import { login, register } from "../../helper/auth.js";
import { repartidorSchema } from '../../schemas/schemas.js';

export default class RepartidorController {
    static async loginRepartidor(req, res, next) {
        try {            
            const user = await login(req.body, "repartidores");               
            const token = await crearToken(user._id.toString(), "repartidores");
            res.status(200).json({ JWT:token, Info:"Usuario logueado correctamente." });
        } catch (error) {            
            next(error);
        }
    }

    static async registerRepartidor(req, res, next) {
        try {
            const validacion = repartidorSchema.safeParse(req.body);
            if (!validacion.success) return res.status(400).json({ message: validacion.error.errors.map(error => `${error.path} - ${error.message}`)});
            const user = await register(req.body, "repartidores");            
            const token = await crearToken(user._id.toString(), "repartidores");
            res.status(200).json({JWT:token, message: "Token creado.",Info:"Usuario registrado correctamente." });
        } catch (error) {
            next(error);
        }
    }

    static async obtenerRepartidores(req, res,next) {
        try {
            const repartidores = await RepartidorModel.obtenerRepartidores();
            res.status(200).json(repartidores);
        } catch (error) {
            next(error);
        }
    }
    static async obtenerRepartidor(req, res,next) {
        try {
            const repartidor = await RepartidorModel.obtenerRepartidor(parseInt(req.params.id));
            res.status(200).json(repartidor);
        } catch (error) {
            next(error);
        }
    }
    static async crearRepartidor(req, res,next) {
        try {
            
            const repartidor = await RepartidorModel.crearRepartidor(req.body);
            res.status(200).json(repartidor);
        } catch (error) {
            next(error);
        }
    }

    static async actualizarRepartidor(req, res,next) {
        try {
            const repartidor = await RepartidorModel.actualizarRepartidor(parseInt(req.params.id), req.body);
            res.status(200).json(repartidor);
        } catch (error) {
            next(error);
        }
    }

    static async eliminarRepartidor(req, res,next) {
        try {
            const repartidor = await RepartidorModel.eliminarRepartidor(parseInt(req.params.id));
            res.status(200).json(repartidor);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerRepartidorPorCedula(req, res,next) {
        try {
            const repartidor = await RepartidorModel.obtenerRepartidorPorCedula(req.params.cedula);
            res.status(200).json(repartidor);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerRepartidorPorCorreo(req, res,next) {
        try {
            const repartidor = await RepartidorModel.obtenerRepartidorPorCorreo(req.params.correo);
            res.status(200).json(repartidor);
        } catch (error) {
            next(error);
        }
    }
}