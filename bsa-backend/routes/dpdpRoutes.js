import express from "express"
import { createDpdp, getAllDpdp, getSingleDpdp, updateDpdp, deleteDpdp } from "../controllers/dpdpController.js"
const router = express.Router()

router.post("/create", createDpdp)
router.get("/getall", getAllDpdp)

router.get("/getSingle/:id", getSingleDpdp)
router.put("/update/:id", updateDpdp)
router.delete("/delete/:id", deleteDpdp)

export default router