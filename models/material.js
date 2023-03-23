const { Sequelize, sequelize } = require(".");

module.exports = (Sequelize, sequelize) => {
    const Material = sequelize.define("Material",{
        title : {
            type : Sequelize.STRING,
            allowNull : false
        },
        paragraph : {
            type : Sequelize.STRING,
            allowNull : false
        },
        categoryId : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    });

    return Material;
}