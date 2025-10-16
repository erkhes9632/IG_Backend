import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  post: { type: Schema.Types.ObjectId, ref: "posts", required: true },
  comments: { type: String, required: true },
  createdAt: { type: Date, defualt: Date.now() },
  updatedAt: { type: Date, defualt: Date.now() },
});

export const commentModel = mongoose.model("comments", commentSchema);
