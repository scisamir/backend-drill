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

export const getUserById = async (id: string) => {
  const result = await pool.query("SELECT id, email FROM users WHERE id = $1", [
    Number(id),
  ]);

  return result.rows[0];
};

export const updateUserEmail = async (id: string, email: string) => {
  const result = await pool.query(
    "UPDATE users SET email = $1 WHERE id = $2 RETURNING id, email",
    [email, Number(id)],
  );

  return result.rows[0];
};
