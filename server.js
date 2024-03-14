import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { DB_CLUSTER, DB_NAME, DB_PASS, DB_USERNAME, port } from "./config/config.js";

const app = express();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hobby: { type: String, default: "no hobby chosen yet" },
  dateCreated: { type: Date, default: Date.now() },
});

export const User = mongoose.model("User", userSchema);

app.use(express.json());
// dangerous
app.use(cors());

// GET
// get all users from json
app.get("/", async (req, res) => {
  try {
    const allUsers = await User.find({});
    if (allUsers.length === 0 || !allUsers) {
      return res.status(204).send({ message: "No users found" });
    }
    return res.status(200).send(allUsers);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

// GET
// get a single user by id from the params
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send({ message: "no user found" });
    }
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

// POST
// create user
app.post("/createUser/", async (req, res) => {
  try {
    const userForm = { ...req.body };
    const user = new User(userForm);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//PUT
// updates a user
app.put("/updateUser/:id", async (req, res) => {
  const userAllowedUpdates = ["age", "hobby"];

  const updates = Object.keys(req.body);

  const isValidOperation = updates.every((update) =>
    userAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).send({ message: "user does not exist" });
    }

    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//DELETE
// DELETES a user

app.delete("/deleteUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findOneAndDelete({ _id: id });
    if (!deletedUser) {
      return res.status(404).send({ message: "no user found" });
    }
    return res.status(200).send(deletedUser);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

app.get("*", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(port, async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASS}@${DB_CLUSTER}/${DB_NAME}`);
    console.log(`Example app listening on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
