const express = require('express')
const {config}= require('./config/config')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express()

const port = config.port // se obtienen secretos del objeto de configuracion

app.use(express.json());

require('./utils/auth') //ejecucion de la capa de autenticacion

routerApi(app); // definicion del routing

app.use(logErrors); //uso de middlewares para traza y envio de errores
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`App listening in ${port}`)
})