 const {sequelize} = require('../sequelize/models')
 const {user} = sequelize.models

 class UserController{
     static async registrarUsuario(req,res){
        try{
            const parametros = req
            const usuario = await user.findOne({
                where:{
                    username: "carlos"
                }
            })
            console.log(parametros)
            res.json({usuario})
        }catch(e){
            console.log(e)
        }
     }
 }

module.exports = UserController