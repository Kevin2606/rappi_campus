import { Router } from 'express';
import RepartidorController from '../controller/repartidor.js';

const router = Router();

router
.get('/', RepartidorController.obtenerRepartidores)
.get('/cedula/:cedula', RepartidorController.obtenerRepartidorPorCedula)
.get('/correo/:correo', RepartidorController.obtenerRepartidorPorCorreo)
.get('/:id', RepartidorController.obtenerRepartidor)
.post('/', RepartidorController.crearRepartidor)
.put('/:id', RepartidorController.actualizarRepartidor)
.delete('/:id', RepartidorController.eliminarRepartidor)
.post('/login', RepartidorController.loginRepartidor)
.post('/register', RepartidorController.registerRepartidor)

export default router;