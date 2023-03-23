const { Sequelize, sequelize } = require(".");

module.exports = (Sequelize, sequelize) => {
    const User = sequelize.define("User", {
        username : {
            type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });

    return User;
}