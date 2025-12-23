import dotnev from 'dotenv';

dotnev.config();

export const ENV={
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGODB_URI: process.env.MONGODB_URI,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLOUNDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUNDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUNDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    ARCJET_KEY: process.env.ARCJET_KEY,
}