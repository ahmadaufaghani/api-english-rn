const db = require("../models");
const Material = db.materials;
const Category = db.categories;

exports.findAll = async (req, res) => {
    try {
        const material = await Material.findAll();
        res.json({
            message : "Materials successfully loaded!",
            data : material
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
        const material = await Material.create(req.body);
        res.json({
            message : "Materials successfully added!",
            data : material
        })
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
        const material = await Material.findByPk(id, {rejectOnEmpty : true});
        material.update(req.body, {
            where : {id}
        });

        res.json({
            message:"Material successfully updated!",
            data : material
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
        const material = await Material.findByPk(id, {rejectOnEmpty : true});
        material.destroy();
        res.json({message : "Material successfully deleted!"});
    } catch (error) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}

exports.findByCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const material = await Material.findAll({
            where : {categoryId : id},
            include : [{
                model : Category,
                as : "category"   
            }]
        })
        res.json({
            message : `Material with categoryId = ${id} found!`,
            data : material
        });
    } catch (err) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}

exports.materialWithCategory = async (req, res) => {
    try {
        const material = await Material.findAll({
            include : [{
                model : Category,
                as : "category"   
            }]
        });
        res.json({
            message : "Materials successfully loaded!",
            data : material
        });
    } catch (err) {
        res.status(500).json({
            message : err.message,
            data : null
        });
    }
}