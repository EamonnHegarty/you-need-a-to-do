import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 8000;

connectDB(); // Connect to MongoDB

const app = express();

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Up and running baby");
});

app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app is up and running on ${port}`));
