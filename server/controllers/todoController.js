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
  const { title, description, task_date, status } = req.body;

  const todo = new Todo({
    user: req.user._id,
    title,
    description,
    task_date,
    status,
  });

  const createdTodo = await todo.save();

  res.status(201).json(createdTodo);
});

// @desc Update a To do
// @route PUT /api/todos/:id
// @access PRIVATE
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    // Update properties here
    todo.status = req.body.status || todo.status;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } else {
    res.status(404);
    throw new Error("Todo not found");
  }
});

export { getTodos, createTodo, updateTodo };
