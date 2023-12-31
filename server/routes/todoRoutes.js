import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
} from "../controllers/todoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getTodos);
router.route("/").post(protect, createTodo);
router.route("/:id").put(protect, updateTodo);

export default router;
