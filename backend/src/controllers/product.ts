import { Request, Response } from "express"
import Product from "../models/product"
import { IProduct, IProductsQuery, IErrorResponse } from "../types"

export const getProducts = async (
	req: Request<{}, {}, {}, IProductsQuery>,
	res: Response<IProduct[] | IErrorResponse>
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
		console.log(error)
		res.status(500).send({ status: 500, message: "Error fetching products" })
	}
}
