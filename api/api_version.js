import routesVersioning from 'express-routes-versioning';
import repartidoresRouter from '../routes/v1/repartidores.js';
import pedidosRouter from '../routes/v1/pedidos.js';
import restaurantesRouter from '../routes/v1/restaurantes.js';
import clientesRouter from '../routes/v1/clientes.js';
import productosRouter from '../routes/v1/productos.js';

import repartidoresRouterV2 from '../routes/v2/repartidores.js';
import pedidosRouterV2 from '../routes/v2/pedidos.js';
import restaurantesRouterV2 from '../routes/v2/restaurantes.js';
import clientesRouterV2 from '../routes/v2/clientes.js';
import productosRouterV2 from '../routes/v2/productos.js';


const version = routesVersioning({defaultVersion: "1.0.0"});

export const versionedClientesRouter = version({
    "^1.0.0": clientesRouter,
    "^2.0.0": clientesRouterV2
});
export const versionedRepartidoresRouter = version({
    "^1.0.0": repartidoresRouter,
    "^2.0.0": repartidoresRouterV2
});
export const versionedRestaurantesRouter = version({
    "^1.0.0": restaurantesRouter,
    "^2.0.0": restaurantesRouterV2
});
export const versionedProductosRouter = version({
    "^1.0.0": productosRouter,
    "^2.0.0": productosRouterV2
});
export const versionedPedidosRouter = version({
    "^1.0.0": pedidosRouter,
    "^2.0.0": pedidosRouterV2
});