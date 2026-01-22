import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const MANGO_DB_URI = process.env.MANGO_DB_URI;

async function connectMangoDb() {
  try {
    const mango = await mongoose.connect(MANGO_DB_URI);
    console.log("MangoDb has been connected successfully!");
  } catch (erroe) {
    console.error(error);
    process.exit(1);
  }
}

export default connectMangoDb;
