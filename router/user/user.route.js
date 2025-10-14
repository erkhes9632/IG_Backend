import express from "express";
import { signup } from "../../controller/user/signup.js";
import { login } from "../../controller/user/login.js";
import { authMiddleware } from "../../authMiddleware/authMiddleware.js";
import { followuser } from "../../controller/user/follow-user.js";
const userRouter = express.Router();

userRouter.post("/sign-up", signup);
userRouter.post("/log-in", login);
userRouter.post("/follow-toggle/:followedUserId", authMiddleware, followuser);

export default userRouter;
