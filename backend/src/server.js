const app = require('./app')

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Servidor se está ejecutando en el puerto ", PORT)
})

