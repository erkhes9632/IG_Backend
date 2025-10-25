import express from "express";
import { searchpost } from "../../controller/post/medpost.js";
import { postscreate } from "../../controller/post/createpost.js";
import { authMiddleware } from "../../authMiddleware/authMiddleware.js";
import { togglePostLike } from "../../controller/post/togglePostLike.js";
import { personalPost } from "../../controller/post/personal-post.js";
import { getUserPost } from "../../controller/post/userpro.js";

const postRouter = express.Router();

postRouter.get("/posts", authMiddleware, searchpost);
postRouter.post("/posting", authMiddleware, postscreate);
postRouter.post("/toggle-like/:postId", authMiddleware, togglePostLike);
postRouter.get("/mypost/:userId", authMiddleware, personalPost);
postRouter.get("/userpost/:userId", authMiddleware, getUserPost);
export default postRouter;
