import express from "express";
import { uptime } from "node:process";
import subjectsRouter from "./routes/subjects.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // allow cookies
  })
);


app.use("/api/subjects", subjectsRouter);

app.use(express.json());

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