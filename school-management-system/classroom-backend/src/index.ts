import express from "express";
import { uptime } from "node:process";

const app = express();
const PORT = 8000;

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