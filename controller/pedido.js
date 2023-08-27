import PedidoModel from '../model/pedido.js';

export default class PedidoController {
    static async obtenerPedidos(req, res) {
        try {
            const pedidos = await PedidoModel.obtenerPedidos();
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async obtenerPedido(req, res) {
        try {
            const pedido = await PedidoModel.obtenerPedido(parseInt(req.params.id));
            res.status(200).json(pedido);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async obtenerPedidosPorCliente(req, res) {
        try {
            const pedidos = await PedidoModel.obtenerPedidosPorCliente(parseInt(req.params.id));
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async obtenerPedidosPorRepartidor(req, res) {
        try {
            const pedidos = await PedidoModel.obtenerPedidosPorRepartidor(parseInt(req.params.id));
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async obtenerPedidosPorRestaurante(req, res) {
        try {
            const pedidos = await PedidoModel.obtenerPedidosPorRestaurante(parseInt(req.params.id));
            res.status(200).json(pedidos);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async crearPedido(req, res) {
        try {
            const pedido = await PedidoModel.crearPedido(req.body);
            res.status(201).json(pedido);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async actualizarPedido(req, res) {
        try {
            const pedido = await PedidoModel.actualizarPedido(parseInt(req.params.id), req.body);
            res.status(200).json(pedido);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }

    static async eliminarPedido(req, res) {
        try {
            const pedido = await PedidoModel.eliminarPedido(parseInt(req.params.id));
            res.status(200).json(pedido);
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    }
}