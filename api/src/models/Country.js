const { DataTypes } = require('sequelize');
const country = (sequelize) => {
  sequelize.define('country', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  })
}

module.exports = country;