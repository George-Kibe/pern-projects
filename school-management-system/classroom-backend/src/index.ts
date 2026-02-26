import express from "express";
import { uptime } from "node:process";
import subjectsRouter from "./routes/subjects.js";
import classesRouter from "./routes/classes.js";
import usersRouter from "./routes/users.js";
import departmentsRouter from "./routes/departments.js";
import statsRouter from "./routes/stats.js";
import enrollmentsRouter from "./routes/enrollments.js";

import cors from "cors";
import securityMiddleware from "./middlewares/security.js";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // allow cookies
  })
);

app.use(express.json());
app.use(securityMiddleware);

// Routes
app.use("/api/subjects", subjectsRouter);
app.use("/api/classes", classesRouter);
app.use("/api/users", usersRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/stats", statsRouter);
app.use("/api/enrollments", enrollmentsRouter);

app.get("/", (req, res) => {
  res.json({ 
    message: "Hello and welcome to the classroom API!",
    uptime : uptime(),
    status: "OK",
    statusCode: 200,
    serverTime: new Date().toISOString(), 
 })
} );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});