import('apminsight')
  .then(({ default: AgentAPI }) => AgentAPI.config())
  .catch(() => console.log('APM not available in this environment'));

import express from "express";
import type { NextFunction, Request, Response } from "express";
import { uptime } from "node:process";
import subjectsRouter from "./routes/subjects.js";
import classesRouter from "./routes/classes.js";
import usersRouter from "./routes/users.js";
import departmentsRouter from "./routes/departments.js";
import statsRouter from "./routes/stats.js";
import enrollmentsRouter from "./routes/enrollments.js";

import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

export const app = express();

app.use((req, res, next) => {
  console.log("---- Incoming Request ----");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Time:", new Date().toISOString());
  next();
});

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    console.log(
      `Response: ${req.method} ${req.originalUrl} - ${res.statusCode} - ${Date.now() - start}ms`
    );
  });

  next();
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error("🔥 UNHANDLED ERROR:");
  console.error(err);

  const errorMessage = err instanceof Error ? err.message : "Unknown error";

  res.status(500).json({
    message: "Internal Server Error",
    error: errorMessage,
  });
});

app.use(
  cors({
    // origin: process.env.FRONTEND_URL, 
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // allow cookies
  })
);

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));
// Routes
app.use("/api/subjects", subjectsRouter);
app.use("/api/classes", classesRouter);
app.use("/api/users", usersRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/stats", statsRouter);
app.use("/api/enrollments", enrollmentsRouter);

app.get("/api", (req, res) => {
  res.json({ 
    message: "Hello and welcome to the classroom API!",
    uptime : uptime(),
    status: "OK",
    statusCode: 200,
    serverTime: new Date().toISOString(), 
 })
} );
export default app;
