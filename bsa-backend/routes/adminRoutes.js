import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import { adminLogin, adminLogout } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", adminLogin);

router.get("/dashboard", adminAuth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin Dashboard",
    admin: req.admin,
  });
});

router.post("/logout", adminAuth, adminLogout);

export default router;