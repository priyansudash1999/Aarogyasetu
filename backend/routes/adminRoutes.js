import express from "express"
import { addDoctors } from "../controllers/adminControllers.js"
import upload from "../middlewares/multer.js"


const adminRouter = express.Router()

adminRouter.post("/add-doctor", upload.single('image'), addDoctors)


export default adminRouter