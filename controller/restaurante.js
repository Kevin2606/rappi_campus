import RestauranteModel from "../model/restaurante.js";

export default class RestauranteController {
    static async obtenerRestaurantes(req, res) {
        try {
            const restaurantes = await RestauranteModel.obtenerRestaurantes();
            res.status(200).json(restaurantes);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async obtenerRestaurante(req, res) {
        try {
            const restaurante = await RestauranteModel.obtenerRestaurante(parseInt(req.params.id));
            res.status(200).json(restaurante);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async crearRestaurante(req, res) {
        try {
            const restaurante = await RestauranteModel.crearRestaurante(req.body);
            res.status(200).json(restaurante);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async actualizarRestaurante(req, res) {
        try {
            const restaurante = await RestauranteModel.actualizarRestaurante(parseInt(req.params.id), req.body);
            res.status(200).json(restaurante);
        } catch (error) {         
            res.status(error.status).json({ message: error.message });
        }
    }

    static async eliminarRestaurante(req, res) {
        try {
            const restaurante = await RestauranteModel.eliminarRestaurante(parseInt(req.params.id));
            res.status(200).json(restaurante);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }
}