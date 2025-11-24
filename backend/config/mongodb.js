import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()
const connectDb = async() => {
  mongoose.connection.on('connected', () => console.log("Database connected..."))
  await mongoose.connect(`${process.env.MONGODB_URL}/aarogyasetu`)
}

export default connectDb