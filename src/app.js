const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {config} = require('dotenv')
config()

const bookRoutes = require('./routes/book.routes')

// usamos express para los middlewares
const app = express();
app.use(bodyParser.json())

//aca conectaremos la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME })
app.use('/books', bookRoutes)

// asignamos y escuchamos en el puerto
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})