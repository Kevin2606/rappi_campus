import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";

const db = (await connect()).collection("repartidores");

export default class RepartidorModel {
    static async obtenerRepartidores() {
        try {
            return await db.find().toArray();
        } catch (error) {
            return { status: 500, message: error.message };
        }
    }

    static async obtenerRepartidor(id) {
        try {
            return await db.findOne({ id_repartidor: id });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async crearRepartidor(repartidor) {
        try {
            repartidor.id_repartidor = await getNextSequenceValue("repartidores");
            return await db.insertOne(repartidor);
        } catch (error) {
            if (error.code === 11000)
                return {
                    status: 400,
                    message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
                };
            return { status: 400, message: "Error validacion fallida" };
        }
    }

    static async actualizarRepartidor(id, repartidor) {
        try {
            return await db.updateOne(
                { id_repartidor: id },
                { $set: repartidor }
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

    static async eliminarRepartidor(id) {
        try {
            return await db.deleteOne({ id_repartidor: id });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async obtenerRepartidorPorCedula(cedula) {
        try {
            return await db.findOne({ cedula: cedula });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async obtenerRepartidorPorCorreo(correo) {
        try {
            return await db.findOne({ correo: correo });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }
}
