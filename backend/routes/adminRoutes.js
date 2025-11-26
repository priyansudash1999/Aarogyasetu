import express from "express"
import { addDoctors, loginAdmin } from "../controllers/adminControllers.js"
import upload from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js"


const adminRouter = express.Router()

adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctors)
adminRouter.post("/login", loginAdmin)


export default adminRouter