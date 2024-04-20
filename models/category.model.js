const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
    name: { type: String, required: true }
}, { versionKey: false });

module.exports = model('Category', CategorySchema);
