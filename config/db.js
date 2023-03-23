module.exports = {
    HOST: "https://expensive-flannel-shirt-moth.cyclic.app/",
    USER: "root",
    PASSWORD: "",
    DB: "quizapp",
    dialect: "mysql",
    pool: {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}