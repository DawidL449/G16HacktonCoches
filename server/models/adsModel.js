const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

//Users
const Ads = db.define("ads", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price:{
    type: DataTypes.FLOAT,
    allowNull: false
  },

  discount:{
    type: DataTypes.STRING,
    allowNull:false,
    defaultValue: "delete",
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { Ads };
