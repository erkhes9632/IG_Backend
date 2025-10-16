import mongoose, { Schema } from "mongoose";

const userPostSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  caption: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, required: true }],
  images: { type: [{ type: String, required: true }], required: true },
  comments: [{ type: Schema.Types.ObjectId, required: true, ref: "comments" }],
  createdAt: { type: Date, defualt: Date.now() },
  updatedAt: { type: Date, defualt: Date.now() },
});

export const postModel = mongoose.model("posts", userPostSchema);
