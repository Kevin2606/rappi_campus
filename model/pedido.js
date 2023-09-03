import { Decimal128 } from "mongodb";
import connect from "../db/connectDB.js";
import insertWithTransaction from "../helper/transaction.js";

const collection= "pedidos"
const db = (await connect()).db().collection(collection);


export default class PedidoModel {

    //TODO: Agregar referencias a otros modelos: obtenerPedidos, obtenerPedido, obtenerPedidosPorCliente, obtenerPedidosPorRepartidor, obtenerPedidosPorRestaurante
    static async obtenerPedidos() {
        try {
            return await db.find().toArray();
        } catch (error) {
            return { status: 500, message: error.message };
        }
    }
    
    static async obtenerPedido(id) {
        try {
            return await db.findOne({ id_pedido: id });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async obtenerPedidosPorCliente(id) {
        try {
            return await db.find({ id_cliente: id }).toArray();
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async obtenerPedidosPorRepartidor(id) {
        try {
            return await db.find({ id_repartidor: id }).toArray();
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async obtenerPedidosPorRestaurante(id) {
        try {
            return await db.find({ id_restaurante: id }).toArray();
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    static async crearPedido(pedido) {
        try {
            //TODO: valor_total debe ser calculado por el sistema
            pedido.valor_total = new Decimal128(`${pedido.valor_total}`); 
            pedido.fecha_pedido = new Date(pedido.fecha_pedido); // Formato: AAAA-MM-DD
            pedido.id_pedido = await getNextSequenceValue("pedidos");
            return await db.insertOne(pedido);
        } catch (error) {
            if (error.code === 11000)
                return {
                    status: 400,
                    message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
                };
            return { status: 400, message: "Error validacion fallida" };
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
            if (error.code === 11000)
            return {
                status: 400,
                message: `${Object.keys(error.keyValue)[0]}: Ya registrado en el sistema`,
            };
            return { status: 400, message: "Error validacion fallida" };
        }
    }

    static async eliminarPedido(id) {
        try {
            return await db.deleteOne({ id_pedido: id });
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

}