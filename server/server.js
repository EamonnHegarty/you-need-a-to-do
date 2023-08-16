import express from "express";
import todos from "./data/todos.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running baby");
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  console.log(todo);
  console.log(todos);
  res.json(todo);
});

app.listen(port, () => console.log(`app is up and running on ${port}`));
