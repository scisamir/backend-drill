import express from "express";
import {
  getUserByIdController,
  getUsersController,
  registerController,
  updateUserController,
} from "../controllers/auth.controller.js";

export const authRoutes = express.Router();
authRoutes.post("/register", registerController);
authRoutes.get("/users", getUsersController);
authRoutes.get("/users/:id", getUserByIdController);
authRoutes.patch("/users/:id", updateUserController);
