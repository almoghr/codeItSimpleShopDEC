import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    hobby: { type: String, default: "no hobby chosen yet" },
    dateCreated: { type: Date, default: Date.now() },
  });
  
  export const User = mongoose.model("User", userSchema);
  