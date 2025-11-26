import jwt from "jsonwebtoken"


// Admin authentication 

const authAdmin = async(req, res, next) => {
  try {
    const {admin_token} = req.headers
    if(!admin_token){
      return res.json({
        success: false,
        message: "Not Authorized..."
      })
    }
    const token_decode = jwt.verify(admin_token, process.env.JWT_SECRET)
      if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.json({
          success: false,
          message: "Not Authorized..."
        })
    }
    next()
  } catch (error) {
      console.error(error);
      res.json({
        success: false,
        message: error.message
      })
  }
}

export default authAdmin