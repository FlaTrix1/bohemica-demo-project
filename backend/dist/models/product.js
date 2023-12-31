"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Product = (0, mongoose_1.model)("Product", ProductSchema);
exports.default = Product;
