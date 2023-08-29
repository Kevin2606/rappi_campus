import express from 'express';
import dotenv from 'dotenv';
import repartidoresRouter from './routes/repartidores.js';
import pedidosRouter from './routes/pedidos.js';
import restaurantesRouter from './routes/restaurantes.js';
import clientesRouter from './routes/clientes.js';
import productosRouter from './routes/productos.js';
import passportConfig from './config/passportConfig.js';
import { config as configAuth, authorize } from './config/auth.js';

dotenv.config();
configAuth();

const app = express();
app.use(express.json());

//app.use(passportConfig.initialize())
//app.use(passportConfig.authenticate('bearer', { session: false }), authorize)
app.use('/repartidores', repartidoresRouter);
app.use('/pedidos', pedidosRouter)
app.use('/restaurantes', restaurantesRouter);
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
    }
);