import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to DB Successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
