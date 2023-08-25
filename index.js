import express from 'express';
import dotenv from 'dotenv';
import repartidoresRouter from './routes/repartidores.js';

dotenv.config();

const app = express();

app.get('/repartidores', repartidoresRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
    }
);