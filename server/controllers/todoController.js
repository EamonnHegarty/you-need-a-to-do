import asyncHandler from "../middleware/asyncHandler.js";
import Todo from "../models/todoModel.js";

// @desc Fetch all Todos
// @route GET /api/todos
// @access Public - will be private

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

export { getTodos };
