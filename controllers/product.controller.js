const { response, request } = require('express');
const ProductModel = require('../models/product.model');

const productGet = async (req = request, res = response) => {
    try {

        // destructuracion de objetos
        const { id } = req.query;

        if (id) {
            const product = await ProductModel.findById(id);
            res.status(200).json({
                message: "Data loaded successfully",
                data: product
            });
            return;
        }
        const products = await ProductModel.find();
        res.status(200).json({
            message: "Data loaded successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving products data",
            error: error.message
        });
    }
}

const productPost = async (req, res) => {
    try {
        const { name, description, price, image, category, availability, origin, roastType } = req.body;
        let product = new ProductModel({
            name: name,
            description: description,
            price: price,
            image: image,
            category: category,
            availability: availability,
            origin: origin,
            roast_type: roastType
        });
        await product.save();
        res.status(201).json({
            message: "Product created successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
}

const productPut = async (req, res) => {
    try {
        const { id } = req.query;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }
}

const productDelete = async (req, res) => {
    try {
        const { id } = req.query;
        await ProductModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Product deleted successfully",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product",
            error: error.message
        });
    }
}

module.exports = {
    productGet,
    productPost,
    productPut,
    productDelete
}
