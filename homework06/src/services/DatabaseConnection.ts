import config from "config";
import "dotenv/config";
import { appDataSource } from "./appDataSource";


const connectDB = async () => {
  try {
    const conn = await appDataSource.initialize();
    console.log(`Postgres connected!`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


export default connectDB;
