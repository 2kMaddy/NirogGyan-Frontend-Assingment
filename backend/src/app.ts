import express from "express";
import { config } from "dotenv";
import cros from "cors";
import appRouter from "./routes/index";

config();
const app = express();

// middleware
app.use(express.json());
app.use(cros());

// Main route
app.use("/api", appRouter);

export default app;
