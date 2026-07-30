import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import {
  createDepartment,
  getDepartments,
} from "../controllers/departmentController.js";
const router = express.Router();

router.post("/", verifyToken, createDepartment);
router.get("/", verifyToken, getDepartments);

export default router;