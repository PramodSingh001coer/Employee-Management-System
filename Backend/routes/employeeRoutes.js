import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createEmployee);

router.get("/", verifyToken, getEmployees);

router.get("/:id", verifyToken, getEmployeeById);

router.put("/:id", verifyToken, updateEmployee);

router.delete("/:id", verifyToken, deleteEmployee);

export default router;