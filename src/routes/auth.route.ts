import express from "express";
import {
  deleteUserController,
  getUserByIdController,
  getUsersController,
  loginController,
  registerController,
  updateUserController,
} from "../controllers/auth.controller.js";

export const authRoutes = express.Router();
authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
authRoutes.get("/users", getUsersController);
authRoutes.get("/users/:id", getUserByIdController);
authRoutes.patch("/users/:id", updateUserController);
authRoutes.delete("/users/:id", deleteUserController);
