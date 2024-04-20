const { Schema, model } = require('mongoose');


const ProductSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    availability: { type: Number, required: true },
    origin: { type: String },
    roast_type: { type: String }
}, { versionKey: false });

module.exports = model('Product', ProductSchema);