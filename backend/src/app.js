require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

// conexion a base de datos
connectDB();

// configuracion de express
const app = express();

//middlewares 
app.use(cors());
app.use(helmet());
app.use(express.json());

// documentacion 

// rutas



module.exports = app; 
