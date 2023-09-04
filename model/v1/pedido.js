import { Decimal128 } from "mongodb";
import connect from "../../db/connectDB.js";
import insertWithTransaction from "../../helper/transaction.js";

const collection= "pedidos"
const db = (await connect()).db().collection(collection);


export default class PedidoModel {

    //TODO: Agregar referencias a otros modelos: obtenerPedidos, obtenerPedido, obtenerPedidosPorCliente, obtenerPedidosPorRepartidor, obtenerPedidosPorRestaurante
    static async obtenerPedidos() {
        try {
            return await db.find().toArray();
        } catch (error) {
            return Promise.reject(error);
        }
    }
    
    static async obtenerPedido(id) {
        try {
            return await db.findOne({ id_pedido: id });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerPedidosPorCliente(id) {
        try {
            return await db.find({ id_cliente: id }).toArray();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerPedidosPorRepartidor(id) {
        try {
            return await db.find({ id_repartidor: id }).toArray();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async obtenerPedidosPorRestaurante(id) {
        try {
            return await db.find({ id_restaurante: id }).toArray();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async crearPedido(pedido) {
        try {
            //TODO: valor_total debe ser calculado por el sistema
            pedido.valor_total = new Decimal128(`${pedido.valor_total}`); 
            pedido.fecha_pedido = new Date(pedido.fecha_pedido); // Formato: AAAA-MM-DD
            return await insertWithTransaction(pedido,collection)            
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async actualizarPedido(id, pedido) {
        try {
            //TODO: valor_total debe ser calculado por el sistema
            if (pedido.valor_total) 
                return { status: 400, message: "No esta permitido actualizar el valor total del pedido" };
            if (pedido.fecha_pedido) {
                pedido.fecha_pedido = new Date(pedido.fecha_pedido); // Formato: AAAA-MM-DD
            }
            return await db.updateOne(
                { id_pedido: id },
                { $set: pedido }
            );
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async eliminarPedido(id) {
        try {
            return await db.deleteOne({ id_pedido: id });
        } catch (error) {
            return Promise.reject(error);
        }
    }

}