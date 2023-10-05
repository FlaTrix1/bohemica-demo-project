import { Schema, model } from "mongoose"
import { IProduct } from "../types"

const ProductSchema = new Schema<IProduct>({
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
})

const Product = model<IProduct>("Product", ProductSchema)

export default Product
