import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const port = process.env.PORT || 8000;

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running baby");
});

app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log(`app is up and running on ${port}`));
