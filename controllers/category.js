const db = require("../models");
const Category = db.categories;

exports.findAll = async (req, res) => {
    try {
        const category = await Category.findAll();
        res.json({
            message : "Categories successfully loaded!",
            data : category
        });
    } catch (err) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}

exports.create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json({
            message : "Categories successfully added!",
            data : category
        })
    } catch (error) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id, {rejectOnEmpty : true});
        category.update(req.body, {
            where : {id}
        });

        res.json({
            message:"Category successfully updated!",
            data : category
        });
    } catch (error) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id, {rejectOnEmpty : true});
        category.destroy();
        res.json({message : "Category successfully deleted!"});
    } catch (error) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}