import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/logout", logoutUser);
router.post("/login", loginUser);

export default router;
