const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const {local} = require("./functions/estrategias")
const passport = require('passport')
const EstrategiaJwt = require('passport-jwt').Strategy
const ExtractorJwt = require('passport-jwt').ExtractJwt
const EstrategiaLocal = require("passport-local").Strategy
const NODE_ENV = process.env.NODE_ENV || 'development'
const fs = require('fs')
const { use } = require('passport')
if(fs.existsSync(`.env.${NODE_ENV}`)){
    require('node-env-file')(`.env.${NODE_ENV}`)
}
const PORT = process.env.PORT

//configuracion de passport
// passport.use(new EstrategiaLocal({
//     usernameField: "username",
//     passwordField: "password",
//     session: false
// }),(username,password,done)=>{
//    local(username,password,done);
// })

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(passport.initialize())

//rutas
app.use('/api/usuarios/registrarse',require('./routes/user'))

app.listen(PORT,()=>{console.log('Escuchando el puerto '+PORT)})