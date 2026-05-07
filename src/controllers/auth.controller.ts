import type { Request, Response } from "express";

export const registerController = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  res.json({
    message: "User registered successfully",
    user: { email },
  });
};
