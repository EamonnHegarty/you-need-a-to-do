import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Todo from "../models/todoModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
  })
);

export default router;
