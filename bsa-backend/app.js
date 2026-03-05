import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import dpdpRoutes from "./routes/dpdpRoutes.js";
import seedAdmin from "./seeder/seedAdmin.js";
import connectDB from "./config/db.js";
import internRoutes from "./routes/internRoutes.js";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    credentials: true,               // Allows the 'Access-Control-Allow-Credentials' header
    allowedHeaders: ['Content-Type', 'Authorization']
    
  }
));
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/dpdp", dpdpRoutes);
app.use("/api/intern", internRoutes);


const PORT = process.env.PORT

connectDB(process.env.MONGO_URI)
  .then(async () => {
    if (process.env.NODE_ENV === "development") {
      await seedAdmin();
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });