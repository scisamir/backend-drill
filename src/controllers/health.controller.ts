import type { Request, Response } from "express";

export const sendPong = (_req: Request, res: Response) => {
  res.send("pong");
};
