import routesVersioning from 'express-routes-versioning';
import repartidoresRouter from '../routes/repartidores.js';
import pedidosRouter from '../routes/pedidos.js';
import restaurantesRouter from '../routes/restaurantes.js';
import clientesRouter from '../routes/clientes.js';
import productosRouter from '../routes/productos.js';

export const versionedClientesRouter = routesVersioning({
    "1.0.0": clientesRouter,
    //"2.0.0": updatedClientesRouter
});
export const versionedRepartidoresRouter = routesVersioning({
    "1.0.0": repartidoresRouter,
    //"2.0.0": updatedRepartidoresRouter
});
export const versionedRestaurantesRouter = routesVersioning({
    "1.0.0": restaurantesRouter,
    //"2.0.0": updatedRestaurantesRouter
});
export const versionedProductosRouter = routesVersioning({
    "1.0.0": productosRouter,
    //"2.0.0": updatedProductosRouter
});
export const versionedPedidosRouter = routesVersioning({
    "1.0.0": pedidosRouter,
    //"2.0.0": updatedPedidosRouter
});