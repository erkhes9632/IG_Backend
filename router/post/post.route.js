import express from "express";
import { medpost } from "../../controller/post/medpost.js";
import { createpost } from "../../controller/post/createpost.js";
import { authMiddleware } from "../../authMiddleware/authMiddleware.js";
import { togglepostlike } from "../../controller/post/togglepostlike.js";
import { personalpost } from "../../controller/post/personalpost.js";
import { userpro } from "../../controller/post/userpro.js";

const postRouter = express.Router();

postRouter.get("/posts", authMiddleware, medpost);
postRouter.post("/posting", authMiddleware, createpost);
postRouter.post("/toggle-like/:postId", authMiddleware, togglepostlike);
postRouter.get("/mypost/:userId", authMiddleware, personalpost);
postRouter.get("/userpost/:userId", authMiddleware, userpro);
export default postRouter;
