import dotenv from "dotenv";
import connectDB from "../../config/db.js";
import { adminLogin } from "../../controllers/adminController.js";

dotenv.config();

let isDbConnected = false;

const allowedOrigins = [
  "http://localhost:5173",
  "https://bsa-lawyer-72jd.vercel.app",
];

export default async function handler(req, res) {
  // CORS headers
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  }

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  if (!isDbConnected) {
    await connectDB(process.env.MONGO_URI);
    isDbConnected = true;
  }

  return adminLogin(req, res);
}

