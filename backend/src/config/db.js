import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGODB_URI);
        console.log("Connected to the database successfully ✅");
    }catch {
        console.log("Failed to connect to the database");
        process.exit(1);
    }
}