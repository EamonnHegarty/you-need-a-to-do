import express from "express";
import { getTodos } from "../controllers/todoController.js";

const router = express.Router();

router.route("/").get(getTodos);

export default router;
