import express from "express";
import { authMiddleware } from "../../authMiddleware/authMiddleware.js";
import { createComment } from "../../controller/comment/createComment.js";
import { getPostComment } from "../../controller/comment/getPostComment.js";

const commentRouter = express.Router();

commentRouter.post("/create", authMiddleware, createComment);

commentRouter.get("/get/:postId", authMiddleware, getPostComment);

export default commentRouter;
