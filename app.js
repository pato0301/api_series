const express = require('express');
const app = express();
const mainRouter = require('./routes/main');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', mainRouter);

app.listen(3000,()=>{
    console.log("Servidor funcionando en el puerto 3000");
})