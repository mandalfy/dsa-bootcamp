import mongoose from "mongoose";

const MONGO_URI: string | undefined = process.env.MONGO_DB_CONNECTION_STRING;

if (!MONGO_URI) {
  throw new Error("MONGO_DB_CONNECTION_STRING is not defined in environment variables");
}

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Using existing database connection");
    return mongoose.connection;
  }

  try {
    const conn = await mongoose.connect(MONGO_URI); // No need for extra options in Mongoose 6+
    console.log("MongoDB connected successfully!");
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
