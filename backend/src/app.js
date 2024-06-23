import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import transactionRoutes from './routes/transactionRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
import swaggerDocs from './docs/swagger.js';

// configuracion de express
const app = express();

// conexion a base de datos
connectDB();

//middlewares 
app.use(cors());
app.use(helmet());
app.use(express.json());

// documentacion 
swaggerDocs(app);

// rutas
app.use('/api', transactionRoutes);

// error middleware
app.use(errorHandler);

export default app