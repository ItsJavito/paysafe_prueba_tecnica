const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// conexion a base de datos


// configuracion de express
const app = express();

//middlewares 
app.use(cors());
app.use(helmet());
app.use(express.json());

// documentacion 

// rutas



module.exports = app; 
