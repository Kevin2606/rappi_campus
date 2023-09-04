import { Router } from 'express';
import RepartidorController from '../controller/v1/repartidor.js';
import ClienteController from '../controller/v1/cliente.js';
import RestauranteController from '../controller/v1/restaurante.js';
import {limitLogin} from '../config/limit.js';


const router = Router();

router
.use(limitLogin())
.post('/repartidores/login', RepartidorController.loginRepartidor)
.post('/repartidores/register', RepartidorController.registerRepartidor)
.post('/clientes/login', ClienteController.loginClient)
.post('/clientes/register', ClienteController.registerClient)
.post('/restaurantes/login', RestauranteController.loginRestaurante)
.post('/restaurantes/register', RestauranteController.registerRestaurante)

export default router;