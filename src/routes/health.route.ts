import express from "express";
import { sendPong } from "../controllers/health.controller.js";

export const healthRoutes = express.Router();
healthRoutes.get("/ping", sendPong);
