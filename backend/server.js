import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"
import connectDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"

const app = express()
const port = process.env.PORT || 4000

connectDb()
connectCloudinary()

configDotenv()

app.use(express.json())
app.use(cors())



app.get("/", (req, res) => {
  res.send("API working")
})

app.listen(port, () => {
  console.log(`The app is running on ${port}`)
})

