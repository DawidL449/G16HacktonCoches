const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

//Users
const User = db.define("user", {
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

  modelo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  color: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { User };
