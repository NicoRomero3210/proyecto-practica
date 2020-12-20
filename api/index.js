const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const NODE_ENV = process.env.NODE_ENV || 'development'
const fs = require('fs')
if(fs.existsSync(`.env.${NODE_ENV}`)){
    require('node-env-file')(`.env.${NODE_ENV}`)
}
const PORT = process.env.PORT
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(PORT,()=>{console.log('Escuchando el puerto '+PORT)})