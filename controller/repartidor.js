import RepartidorModel from '../model/repartidor.js';

export default class RepartidorController {
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