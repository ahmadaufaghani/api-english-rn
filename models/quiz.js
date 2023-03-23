const { Sequelize, sequelize } = require(".");

module.exports = (Sequelize, sequelize) => {
    const Quiz = sequelize.define("Quiz", {
        question : {
            type : Sequelize.STRING,
            allowNull : false
        },
        correct_answer : {
            type : Sequelize.STRING,
            allowNull : false
        },
        option_1 : {
            type : Sequelize.STRING,
            allowNull : false
        },
        option_2 : {
            type : Sequelize.STRING,
            allowNull : false
        },
        option_2 : {
            type : Sequelize.STRING,
            allowNull : false
        },
        option_3 : {
            type : Sequelize.STRING,
            allowNull : false
        },
        categoryId : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    });

    return Quiz;
}