const { response, request } = require('express');
const CategoryModel = require('../models/category.model');

const categoryGet = async (req = request, res = response) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json({
            message: "Data loaded successfully",
            data: categories
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving categories data",
            error: error.message
        });
    }
}

const categoryPost = async (req, res) => {
    try {
        const { name } = req.body;
        let category = new CategoryModel({ name });
        await category.save();
        res.status(201).json({
            message: "Category created successfully",
            data: category
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating category",
            error: error.message
        });
    }
}

const categoryPut = async (req, res) => {
    try {
        const { id } = req.query;
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: "Category updated successfully",
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating category",
            error: error.message
        });
    }
}

const categoryDelete = async (req, res) => {
    try {
        const { id } = req.query;
        await CategoryModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Category deleted successfully",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting category",
            error: error.message
        });
    }
}

module.exports = {
    categoryGet,
    categoryPost,
    categoryPut,
    categoryDelete
}
