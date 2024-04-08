const { DataTypes } = require('sequelize');
const temperament = (sequelize) => {
  sequelize.define('temperament', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  })
}

module.exports = temperament;