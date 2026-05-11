import type { Request, Response } from "express";
import { getUsers, registerUser } from "../services/auth.service.js";

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const result = await registerUser(email, password);

    res.json(result);
  } catch (_error) {
    res.status(409).json({ error: "User already exists" });
  }
};

export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const result = await getUsers();

    res.json(result);
  } catch (_error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
