import { Router } from 'express';
import RepartidorControllerV1 from '../controller/repartidor.js';

const router = Router();

router
.get('/', RepartidorControllerV1.obtenerRepartidores)
.get('/cedula/:cedula', RepartidorControllerV1.obtenerRepartidorPorCedula)
.get('/correo/:correo', RepartidorControllerV1.obtenerRepartidorPorCorreo)
.get('/:id', RepartidorControllerV1.obtenerRepartidor)
.post('/', RepartidorControllerV1.crearRepartidor)
.put('/:id', RepartidorControllerV1.actualizarRepartidor)
.delete('/:id', RepartidorControllerV1.eliminarRepartidor)

export default router;