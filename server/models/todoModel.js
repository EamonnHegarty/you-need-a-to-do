import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    task_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ToDo = mongoose.model("ToDo", todoSchema);

export default ToDo;
