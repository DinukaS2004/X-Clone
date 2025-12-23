import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGODB_URI);
        console.log("Connected to the database successfully ✅");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }    
}
