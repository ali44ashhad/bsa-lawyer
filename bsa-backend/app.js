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

// Explicit CORS allowlist for frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://bsa-lawyer-72jd.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server / tools without origin
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
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