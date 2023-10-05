import { Request, Response } from "express"
import Product from "../models/product"

export const getProducts = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { search } = req.query

	try {
		let products

		if (search && typeof search === "string") {
			products = await Product.find({
				$or: [
					{ name: { $regex: search, $options: "i" } },
					{ description: { $regex: search, $options: "i" } },
				],
			})
		} else {
			products = await Product.find()
		}

		res.status(200).json(products)
	} catch (error) {
		throw error
	}
}
