import express, { Express, Request, Response, Application } from "express"
import dotenv from "dotenv"

dotenv.config()

import "./database"
import productRoutes from "./routes/product"

const app: Application = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(productRoutes)

app.listen(port, () => {
	console.log(`Server is up at http://localhost:${port}`)
})
