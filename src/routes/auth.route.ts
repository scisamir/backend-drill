import express from "express";
import { registerController } from "../controllers/auth.controller.js";

export const authRoutes = express.Router();
authRoutes.post("/register", registerController);
