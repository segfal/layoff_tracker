const { DataTypes } = require("sequelize");
const {sequelize} = require("../db");

const Layoff = sequelize.define(
    "Layoff",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.STRING
        },
        company: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        number_of_workers: {
            type: DataTypes.INTEGER
        },
        warn_received_date: {
            type: DataTypes.DATE
        },
        effective_date: {
            type: DataTypes.DATE
         },
        closure_layoff: {
            type: DataTypes.STRING
        },
        county: {
          type: DataTypes.STRING
        }
    },  {
        tableName: 'warn' // Specify the custom table name
    })

module.exports = Layoff