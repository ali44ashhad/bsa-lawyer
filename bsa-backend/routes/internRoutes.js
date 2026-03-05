import express from "express";
import {
  createIntern,
  getAllInterns,
} from "../controllers/internController.js";

const router = express.Router();

// Create Intern
router.post("/create-intern", createIntern);

// Get All Interns
router.get("/getall-interns", getAllInterns);

export default router;