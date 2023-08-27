import { Router } from "express";
import PedidoController from "../controller/pedido.js";

const router = Router();

router
.get('/', PedidoController.obtenerPedidos)
.get('/:id', PedidoController.obtenerPedido)
.get('/cliente/:id', PedidoController.obtenerPedidosPorCliente)
.get('/repartidor/:id', PedidoController.obtenerPedidosPorRepartidor)
.get('/restaurante/:id', PedidoController.obtenerPedidosPorRestaurante)
.post('/', PedidoController.crearPedido)
.put('/:id', PedidoController.actualizarPedido)
.delete('/:id', PedidoController.eliminarPedido);

export default router;