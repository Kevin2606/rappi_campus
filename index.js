import express from 'express';
import dotenv from 'dotenv';
import repartidoresRouter from './routes/repartidores.js';
import pedidosRouter from './routes/pedidos.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/repartidores', repartidoresRouter);
app.use('/pedidos', pedidosRouter)

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
    }
);