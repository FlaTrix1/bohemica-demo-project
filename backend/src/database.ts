import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URL as string, {})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))

db.once("open", () => {
	console.log("Database Connected")
})
