import type { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const result = await registerUser(email);

  res.json(result);
};
