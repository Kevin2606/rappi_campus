import { Router } from 'express';
import RepartidorController from '../controller/repartidor.js';
import ClienteController from '../controller/cliente.js';
import RestauranteController from '../controller/restaurante.js';

const router = Router();

router
.post('/repartidores/login', RepartidorController.loginRepartidor)
.post('/repartidores/register', RepartidorController.registerRepartidor)
.post('/clientes/login', ClienteController.loginClient)
.post('/clientes/register', ClienteController.registerClient)
.post('/restaurantes/login', RestauranteController.loginRestaurante)
.post('/restaurantes/register', RestauranteController.registerRestaurante)

export default router;