import express from "express";
import { signup } from "../../controller/user/signup.js";
import { login } from "../../controller/user/login.js";
import { authMiddleware } from "../../authMiddleware/authMiddleware.js";
import { followuser } from "../../controller/user/followuser.js";
import { getUser } from "../../controller/user/getUsers.js";
import { userdetail } from "../../controller/post/userdetail.js";
const userRouter = express.Router();

userRouter.post("/sign-up", signup);
userRouter.post("/log-in", login);
userRouter.post("/follow-toggle/:followedUserId", authMiddleware, followuser);
userRouter.get("/users/:searchParams", authMiddleware, getUser);
userRouter.get("/user/:userId", authMiddleware, userdetail);

export default userRouter;
