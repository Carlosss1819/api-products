import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes.js';
const app=express();
//Middleweres
app.use(express.json());
app.use(morgan("dev"));
//Routes
app.use("/products", productsRoutes);
//Start server
export default app;