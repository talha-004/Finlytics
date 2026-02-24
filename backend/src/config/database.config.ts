import mongoose from "mongoose";
import { Env } from "./env.config";
const connectDatabase = async () => {
  try {
    await mongoose.connect(Env.MONGO_URI, {
      serverSelectionTimeoutMS: 8000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });

    console.log("🟢 Connected to MongoDB database");
  } catch (error) {
    console.log("Error connecting to MongoDB database", error);
    process.exit(1);
  }
};

export default connectDatabase;
