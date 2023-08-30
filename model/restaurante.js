import connect from "../db/connectDB.js";
import getNextSequenceValue from "../helper/counter.js";

const db = (await connect()).collection("restaurantes");

export default class RestauranteModel {
    static async obtenerRestaurantes() {
        try {
            return await db.find().toArray();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerRestaurante(id) {
        try {
            const getRestaurantes= await db.findOne({ id_restaurante: id });
            if(!getRestaurantes)
            {   
                console.log("Restaurante no encontrado")
                return {status:400, message: "Restaurante no encontrado"}
            }
            return getRestaurantes
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async crearRestaurante(restaurante) {
        try {
            //restaurante.id_restaurante = await getNextSequenceValue("restaurantes");
            return await db.insertOne(restaurante);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async actualizarRestaurante(id, restaurante) {
        try {
            const updateRestaurante= await db.updateOne(
                { id_restaurante: id },
                { $set: restaurante }
            );
            if(updateRestaurante.acknowledged && updateRestaurante.matchedCount>0)
            {
                console.log("Datos actualizados correctamente");
                return {status:400, message:"Datos actualizados correctamente" }
            }
            return updateRestaurante
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async eliminarRestaurante(id) {
        try {
            const removeRestaurante= await db.deleteOne({ id_restaurante: id });
            if(removeRestaurante.acknowledged && removeRestaurante.deletedCount>0)
            {
                console.log("Cliente eliminado correctamente");
                return  {status:400, message: "Cliente eliminado Correctamente"} 
            }
            return removeRestaurante
        } catch (error) {
            return Promise.reject(error);
        }
    }

}