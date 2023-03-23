const db = require("../models");
const Quiz = db.quizzes;
const Category = db.categories;

exports.getAll = async (req, res) => {
    try {
        const data = await Quiz.findAll();
        res.json({
            message: "Quiz successfully found!",
            data : data
        });
    } catch (error) {  
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
}

exports.create = async (req, res) => {
    try {
        const data = await Quiz.create(req.body);
        res.json({
            message: "Quiz successfully created!",
            data : data
        });
    } catch (error) {  
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty : true});
        quiz.update(req.body, {
            where : {id},
        });
        res.json({
            message : "Data successfully updated!",
            data : quiz
        });
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty : true});
        quiz.destroy();
        res.json({
            message : "Data successfully deleted!"
        });
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty : true});
        res.json({
            message : `Quiz with id = ${id} successfully found!`,
            data : quiz
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
}

exports.findByCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findAll({
            include : [{
                model : Category,
                as : "category"
            }],
            where : {categoryId : id}
        });

        res.json({
            message : `Quiz with categoryId = ${id} successfully found!`,
            data : quiz
        })
        
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
    
}

exports.quizWithCategory = async (req, res) => {
    try {
        const data = await Quiz.findAll({
            include : [{
                model : Category,
                as : "category"
            }]
        });
        res.json({
            message: "Quiz successfully found!",
            data : data
        });
    } catch (error) {  
        res.status(500).json({
            message : error.message,
            data : null
        });
    }
}