import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 8000;

connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Up and running baby");
});

app.use("/api/todos", todoRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app is up and running on ${port}`));
