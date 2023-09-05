import asyncHandler from "../middleware/asyncHandler.js";
import Todo from "../models/todoModel.js";

// @desc Fetch all Todos
// @route GET /api/todos
// @access PRIVATE
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  res.json(todos);
});

// @desc Create a To do
// @route POST /api/todos
// @access PRIVATE
const createTodo = asyncHandler(async (req, res) => {
  const { title, description, task_date, status, priority } = req.body;

  const todo = new Todo({
    user: req.user._id,
    title,
    description,
    task_date,
    status,
    priority,
  });

  const createdTodo = await todo.save();

  res.status(201).json(createdTodo);
});

export { getTodos, createTodo };
