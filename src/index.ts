import express from "express";
import "dotenv/config";
import { healthRoutes } from "./routes/health.route.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { authRoutes } from "./routes/auth.route.js";

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(loggerMiddleware);

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
