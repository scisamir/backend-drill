import { pool } from "../config/db.js";
import bcrypt from "bcrypt";

export const registerUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
    [email, hashedPassword],
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

export const deleteUser = async (id: string) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING id, email",
    [Number(id)],
  );

  return result.rows[0];
};

export const loginUser = async (email: string, password: string) => {
  const result = await pool.query(
    "SELECT id, email, password FROM users WHERE email = $1",
    [email],
  );

  const user = result.rows[0];
  if (!user) {
    return null;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return null;
  }

  return { id: user.id, email: user.email };
};
