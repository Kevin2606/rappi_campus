import connect from "../db/connectDB.js";
import insertWithTransaction from "../helper/transaction.js";

const collection= "repartidores"
const db = (await connect()).db().collection(collection);

export default class RepartidorModel {
    static async obtenerRepartidores() {
        try {
            return await db.find().toArray();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerRepartidor(id) {
        try {
            const repartidor= await db.findOne({ id: id });
            if(!repartidor)
            {   
                return {status:400, message: "Repartidor no encontrado"}
            }
            return repartidor
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async crearRepartidor(repartidor) {
        try {
            repartidor.id = await getNextSequenceValue("repartidores");
            return await db.insertOne(repartidor);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async actualizarRepartidor(id, repartidor) {
        try {
            const updateRepartidor=await db.updateOne(
                { id: id },
                { $set: repartidor }
            );
            if(updateRepartidor.acknowledged && updateRepartidor.matchedCount>0)
            {
                return {status:400, message:"Datos actualizados correctamente" }
            }
            return updateRepartidor 
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async eliminarRepartidor(id) {
        try {
            const removeRepartidor= await db.deleteOne({ id: id });
            if(removeRepartidor.acknowledged && removeRepartidor.deletedCount>0)
            {
                return  {status:400, message: "Cliente eliminado Correctamente"} 
            }
            return removeRepartidor
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerRepartidorPorCedula(cedula) {
        try {
            const repartidor= await db.findOne({ cedula: cedula });
            if(!repartidor)
            {   
                return {status:400, message: "Repartidor no encontrado"}
            }
            return repartidor
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerRepartidorPorCorreo(correo) {
        try {
            const repartidor= await db.findOne({ correo: correo });
            if(!repartidor)
            {   
                return {status:400, message: "Repartidor no encontrado"}
            }
            return repartidor
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
