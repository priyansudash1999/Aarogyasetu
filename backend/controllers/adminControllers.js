import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModels.js"

const addDoctors = async (req, res) => {
  try {
    const {name, email, password, speciality, degree, experience, about, available, fees, address} = req.body
    const imageFile = req.file

    // Check all data present or not
    if(!name || !email || !password || !speciality || !degree || !experience || !about || !available || !fees || !address){
      return res.json({
        success: false,
        message: "Missing details"
      })
    }

    // Validate email
    if(!validator.isEmail(email)){
      return res.json({
        success: false,
        message: "Invalid Email"
      })
    }
    
    // Check password is strong or not
    if(password.length < 8){
      return res.json({
        success: false,
        message: "Password is weak"
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
    const imageUrl = imageUpload.secure_url

    const doctorData = {
      name, 
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      available,
      date: Date.now()
    }

    const newDoctor = new doctorModel(doctorData)

    await newDoctor.save()

    res.json({
      success: true,
      message: "Doctor added successfully..."
    })

  } catch (error) {
      console.error(error);
      res.json({
        success: false,
        message: "Getting error while add doctor"
      })
  }
}

export {addDoctors}