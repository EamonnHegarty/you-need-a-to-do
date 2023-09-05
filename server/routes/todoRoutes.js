import express from "express";
import { getTodos, createTodo } from "../controllers/todoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getTodos);
router.route("/").post(protect, createTodo);

export default router;
