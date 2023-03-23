const { sequelize } = require(".");

module.exports = (Sequelize, sequelize) => {
    const Category = sequelize.define("Category", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });

    return Category;
}