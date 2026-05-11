import { Pool } from "pg";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = Number(process.env.DB_PORT);

export const pool = new Pool({
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  database: dbName,
  port: dbPort,
});
