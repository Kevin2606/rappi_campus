import RestauranteModel from "../model/restaurante.js";

export default class RestauranteController {
    static async obtenerRestaurantes(req, res,next) {
        try {
            const restaurantes = await RestauranteModel.obtenerRestaurantes();
            res.status(200).json(restaurantes);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerRestaurante(req, res,next) {
        try {
            const restaurante = await RestauranteModel.obtenerRestaurante(parseInt(req.params.id));
            res.status(200).json(restaurante);
        } catch (error) {
            next(error);
        }
    }

    static async crearRestaurante(req, res,next) {
        try {
            const restaurante = await RestauranteModel.crearRestaurante(req.body);
            res.status(200).json(restaurante);
        } catch (error) {
            next(error);
        }
    }

    static async actualizarRestaurante(req, res,next) {
        try {
            const restaurante = await RestauranteModel.actualizarRestaurante(parseInt(req.params.id), req.body);
            res.status(200).json(restaurante);
        } catch (error) {         
            next(error);
        }
    }

    static async eliminarRestaurante(req, res,next) {
        try {
            const restaurante = await RestauranteModel.eliminarRestaurante(parseInt(req.params.id));
            res.status(200).json(restaurante);
        } catch (error) {
            next(error);
        }
    }
}