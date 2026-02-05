import dotenv from "dotenv";

import mongoose from "mongoose";
dotenv.config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;

async function connectMangoDb() {
  try {
    const mango = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MangoDb has been connected successfully!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectMangoDb;
