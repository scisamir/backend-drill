import express from "express";
import {
  getUsersController,
  registerController,
} from "../controllers/auth.controller.js";

export const authRoutes = express.Router();
authRoutes.post("/register", registerController);
authRoutes.get("/users", getUsersController);
