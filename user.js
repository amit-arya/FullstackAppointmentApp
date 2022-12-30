const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
  id: { 
   type: Sequelize.INTEGER,
   autoIncrement: true,
   allowNull: false,
   primaryKey: true
  },
  username: {
    type:Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type:Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;