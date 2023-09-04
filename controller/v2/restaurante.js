import RestauranteModel from "../../model/v1/restaurante.js";
import { crearToken } from "../../middleware/jwt.js";
import { login, register } from "../../helper/auth.js";

export default class RestauranteController {
    static async loginRestaurante(req, res, next) {
        try {
            const user = await login(req.body, "restaurantes");
            if (!user)
                throw { status: 400, message: "Usuario no encontrado" };
            const token = await crearToken(user._id.toString(), "restaurantes");
            res.status(200).json({ JWT:token, Info:"Usuario logueado correctamente." });
        } catch (error) {
            next(error);
        }
    }

    static async registerRestaurante(req, res, next) {
        try {
            const user = await register(req.body, "restaurantes");            
            const token = await crearToken(user._id.toString(), "restaurantes");
            res.status(200).json({JWT:token, message: "Token creado.",Info:"Usuario registrado correctamente." });
        } catch (error) {
            next(error);
        }
    }

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