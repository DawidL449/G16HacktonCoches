const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

//Users
const Categorie = db.define("categorie", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { Categorie };
