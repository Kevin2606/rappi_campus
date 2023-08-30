import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";

const db = (await connect()).collection("restaurantes");

export default class RestauranteModel {
    static async obtenerRestaurantes() {
        try {
            return await db.find().toArray();
        } catch (error) {
            return { status: 500, message: error.message };
        }
    }

    static async obtenerRestaurante(id) {
        try {
            return await db.findOne({ id: id });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async crearRestaurante(restaurante) {
        try {
            restaurante.id = await getNextSequenceValue("restaurantes");
            return await db.insertOne(restaurante);
        } catch (error) {
            if (error.code === 11000)
                return {
                    status: 400,
                    message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
                };
            return { status: 400, message: "Error validacion fallida" };
        }
    }

    static async actualizarRestaurante(id, restaurante) {
        try {
            return await db.updateOne(
                { id: id },
                { $set: restaurante }
            );
        } catch (error) {
            if (error.code === 11000)
            return {
                status: 400,
                message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
            };
            return { status: 400, message: "Error validacion fallida" };
        }
    }

    static async eliminarRestaurante(id) {
        try {
            return await db.deleteOne({ id: id });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

}