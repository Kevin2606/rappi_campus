import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import passportConfig from './config/passportConfig.js';
import { config as configAuth, authorize } from './config/auth.js';
import { versionedClientesRouter,versionedPedidosRouter,versionedProductosRouter,versionedRepartidoresRouter,versionedRestaurantesRouter } from './api/api_version.js';
import repartidoresRouterV1 from './routes/repartidores.js';
import routesVersioning from 'express-routes-versioning';
//import repartidoresRouter from '../routes/repartidores.js';
import pedidosRouter from './routes/pedidos.js';
import restaurantesRouter from './routes/restaurantes.js';
import clientesRouter from './routes/clientes.js';
import productosRouter from './routes/productos.js';
import errorHandler from "./utils/errorHandler.js";

dotenv.config();
configAuth();

const app = express();
app.use(express.json());

app.use('/auth', authRouter)
app.use(passportConfig.initialize())
app.use(passportConfig.authenticate('bearer', { session: false }), authorize)
app.use('/v1/repartidores', repartidoresRouterV1);
app.use('/pedidos', pedidosRouter)
app.use('/restaurantes', restaurantesRouter);
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
    }
);