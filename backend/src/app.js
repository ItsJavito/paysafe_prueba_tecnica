import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import transactionRoutes from './routes/transactionRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

// configuracion de express
const app = express();

// conexion a base de datos
connectDB();

//middlewares 
app.use(cors());
app.use(helmet());
app.use(express.json());

// documentacion 

// rutas
app.use('/api', transactionRoutes);


export default app