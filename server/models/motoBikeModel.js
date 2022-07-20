const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Motobike = db.define("motobike", {

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },

    brand:{
        type: DataTypes.STRING,
        allowNull: false
    },

    model:{
        type: DataTypes.STRING,
        allowNull: false
    },

    color:{
        type: DataTypes.STRING,
        allowNull: false
    },

    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },

    categoriesId: {
        type: DataTypes.STRING,
    },   

    discountId: {
        type: DataTypes.STRING,
        allowNull:true
    },   
    
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }

})

module.exports = { Motobike }