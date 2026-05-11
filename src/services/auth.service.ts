import { pool } from "../config/db.js";

export const registerUser = async (email: string, password: string) => {
  const result = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
    [email, password],
  );

  return result.rows[0];
};

export const getUsers = async () => {
  const result = await pool.query("SELECT id, email FROM users");

  return result.rows;
};
