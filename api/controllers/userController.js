 const {sequelize,Sequelize} = require('../sequelize/models')
 const {users} = sequelize.models

 class UserController{
     static async registrarUsuario(req,res){
        try{
            const {datosUsuario} = req.query
            const usuario = await users.findOne({
                where:{
                    username: "carlos"
                }
            })
            if(datosUsuario){
                throw new Error('Usuario existente')
            }
            res.json({mensaje:"creacion exitosa"})
        }catch(e){
            if(e.message === "Usuario existente"){
                res.status(400,{mensaje:"gato"}).send({mensaje: "Ya existe tu usuario pa!"})
            }else{
                res.status(500).send({mensaje:"error del server"})
            }
        }
     }
 }

module.exports = UserController