'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    username: DataTypes.STRING,
    password:{
      type: DataTypes.STRING,
      set(val){
        const salt = bcrypt.genSalt(10)
        const hash = bcrypt.hashSync(val,salt)
        this.setDataValue("password",hash)
      }      
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};