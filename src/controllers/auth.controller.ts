import type { Request, Response } from "express";
import {
  getUserById,
  getUsers,
  registerUser,
  updateUserEmail,
} from "../services/auth.service.js";

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

export const getUserByIdController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const result = await getUserById(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result);
  } catch (_error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

export const updateUserController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const result = await updateUserEmail(req.params.id, email);
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result);
  } catch (_error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
