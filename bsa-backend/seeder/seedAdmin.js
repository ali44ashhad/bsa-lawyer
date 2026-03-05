import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import admin from "../models/admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    const adminExists = await admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (adminExists) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD,10);

    await admin.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
    });

    console.log("Admin Auto Seeded Successfully");
  } catch (error) {
    console.error("Seeding error:", error);
  }
};

export default seedAdmin;