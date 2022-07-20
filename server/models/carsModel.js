const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Car = db.define("car", {

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
        type: DataTypes.INTEGER,
        allowNull: false
    },

/*     categoriesId: {
        type: DataTypes.STRING,
        allowNull: false
    },   

    discountId: {
        type: DataTypes.STRING,
        allowNull:true
    },    */
    
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }

})

module.exports = { Car }