import { Router } from 'express';
import RestauranteController from '../controller/restaurante.js';

const router = Router();

router
.get('/', RestauranteController.obtenerRestaurantes)
.get('/:id', RestauranteController.obtenerRestaurante)
.post('/', RestauranteController.crearRestaurante)
.put('/:id', RestauranteController.actualizarRestaurante)
.delete('/:id', RestauranteController.eliminarRestaurante)
.post('/login', RestauranteController.loginRestaurante)
.post('/register', RestauranteController.registerRestaurante)

export default router;