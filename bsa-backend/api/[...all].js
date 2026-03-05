import dotenv from "dotenv";
import app from "../app.js";
import connectDB from "../config/db.js";

dotenv.config();

let isDbConnected = false;

async function ensureDb() {
  if (!isDbConnected) {
    await connectDB(process.env.MONGO_URI);
    isDbConnected = true;
  }
}

export default async function handler(req, res) {
  await ensureDb();
  return app(req, res);
}

