import RepartidorModel from '../model/repartidor.js';
import { crearToken } from "../middleware/jwt.js";
import { login, register } from "../helper/auth.js";

export default class RepartidorController {
    static async loginRepartidor(req, res) {
        try {
            const user = await login(req.body, "repartidores");
            if (!user)
                throw { status: 400, message: "Usuario no encontrado" };
            const token = await crearToken(user._id.toString(), "repartidores");
            res.status(200).json({ token });
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async registerRepartidor(req, res) {
        try {
            const user = await register(req.body, "repartidores");
            if (user.status === 400)
                throw { status: 400, message: user.message };
            const token = await crearToken(user.insertedId.toString(), "repartidores");
            res.status(200).json({ token });
        } catch (error) {
            res.status(error.status).json({ message: error.message });
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