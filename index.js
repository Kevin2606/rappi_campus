import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import passportConfig from './config/passportConfig.js';
import { config as configAuth, authorize } from './config/auth.js';
import { versionedClientesRouter,versionedPedidosRouter,versionedProductosRouter,versionedRepartidoresRouter,versionedRestaurantesRouter } from './api/api_version.js';
import errorHandler from "./utils/errorHandler.js";

dotenv.config();
configAuth();

const app = express();
app.use(express.json());

app.use('/auth', authRouter)
//app.use(passportConfig.initialize())
//app.use(passportConfig.authenticate('bearer', { session: false }), authorize)
app.use('/repartidores', versionedRepartidoresRouter);
app.use('/pedidos', versionedPedidosRouter)
app.use('/restaurantes', versionedRestaurantesRouter);
app.use('/clientes', versionedClientesRouter);
app.use('/productos', versionedProductosRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
    }
);