import { pool } from "../config/db.js";

export const registerUser = async (email: string, password: string) => {
  const result = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
    [email, password],
  );

  return result.rows[0];
};
