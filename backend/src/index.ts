import express, { Application } from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

import "./database"
import productRoutes from "./routes/product"

const app: Application = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(productRoutes)

app.listen(port, () => {
	console.log(`Server is up at http://localhost:${port}`)
})
