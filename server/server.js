import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";

dotenv.config();

const port = process.env.PORT || 8000;

connectDB(); // Connect to MongoDB

const app = express();

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  console.log("in production");
  const __dirname = path.resolve();
  // set static folder
  app.use(express.static(path.join(__dirname, "/client/build")));

  // any route that is not api will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    console.log("not in production");
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app is up and running on ${port}`));
