import config from "config";
import "dotenv/config";
import mongoose from "mongoose";


const mongoURL = config.get("database.url");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
