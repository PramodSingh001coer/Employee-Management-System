import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/stats", verifyToken, getDashboardStats);

export default router;