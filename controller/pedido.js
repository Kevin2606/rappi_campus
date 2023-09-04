import PedidoModel from '../model/pedido.js';

export default class PedidoController {
    static async obtenerPedidos(req, res, next) {
        try {
            const pedidos = await PedidoModel.obtenerPedidos();
            res.status(200).json(pedidos);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerPedido(req, res, next) {
        try {
            const pedido = await PedidoModel.obtenerPedido(parseInt(req.params.id));
            res.status(200).json(pedido);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerPedidosPorCliente(req, res, next) {
        try {
            const pedidos = await PedidoModel.obtenerPedidosPorCliente(parseInt(req.params.id));
            res.status(200).json(pedidos);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerPedidosPorRepartidor(req, res, next) {
        try {
            const pedidos = await PedidoModel.obtenerPedidosPorRepartidor(parseInt(req.params.id));
            res.status(200).json(pedidos);
        } catch (error) {
            next(error);
        }
    }

    static async obtenerPedidosPorRestaurante(req, res, next) {
        try {
            const pedidos = await PedidoModel.obtenerPedidosPorRestaurante(parseInt(req.params.id));
            res.status(200).json(pedidos);
        } catch (error) {
            next(error);
        }
    }

    static async crearPedido(req, res, next) {
        try {
            const pedido = await PedidoModel.crearPedido(req.body);
            res.status(201).json(pedido);
        } catch (error) {
            next(error);
        }
    }

    static async actualizarPedido(req, res, next) {
        try {
            const pedido = await PedidoModel.actualizarPedido(parseInt(req.params.id), req.body);
            res.status(200).json(pedido);
        } catch (error) {
            next(error);
        }
    }

    static async eliminarPedido(req, res, next) {
        try {
            const pedido = await PedidoModel.eliminarPedido(parseInt(req.params.id));
            res.status(200).json(pedido);
        } catch (error) {
            next(error);
        }
    }
}