const dbConfig = require("../config/db");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorAlias: false,
    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.quizzes = require("./quiz")(Sequelize, sequelize);
db.users = require("./user")(Sequelize, sequelize);
db.categories = require("./category")(Sequelize, sequelize);
db.materials = require("./material")(Sequelize, sequelize);

db.categories.hasMany(db.quizzes, {
    foreignKey : "categoryId"
});
db.quizzes.belongsTo(db.categories, {
    as : "category"
});

db.categories.hasMany(db.materials, {
    foreignKey : "categoryId"
});

db.materials.belongsTo(db.categories, {
    as : "category"
});

module.exports = db;