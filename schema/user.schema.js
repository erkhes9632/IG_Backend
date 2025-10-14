import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, require: true },
  password: { type: String, required: true },
  bio: { type: String, required: false },
  profilePicture: { type: String, required: false },
  followers: [{ type: Schema.Types.ObjectId, required: true }],
  following: [{ type: Schema.Types.ObjectId, required: true }],
  createdAt: { type: Date, defualt: Date.now() },
  updatedAt: { type: Date, defualt: Date.now() },
});

export const userModel = mongoose.model("users", userSchema);
