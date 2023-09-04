import { Router } from 'express';
import RestauranteController from '../../controller/v1/restaurante.js';

const router = Router();

router
.get('/', RestauranteController.obtenerRestaurantes)
.get('/:id', RestauranteController.obtenerRestaurante)
.post('/', RestauranteController.crearRestaurante)
.put('/:id', RestauranteController.actualizarRestaurante)
.delete('/:id', RestauranteController.eliminarRestaurante)

export default router;