import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./users.js";
import todos from "./todos.js";
import User from "../models/userModel.js";
import ToDo from "../models/todoModel.js";
import connectDB from "../config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await ToDo.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleToDos = todos.map((todo) => {
      return { ...todo, user: adminUser };
    });

    await ToDo.insertMany(sampleToDos);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await ToDo.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
