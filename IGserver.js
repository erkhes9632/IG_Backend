import express from "express";
import mongoose from "mongoose";
import { userModel } from "./schema/user.schema.js";
import cors from "cors";
import userRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import commentRouter from "./router/comment/comment.router.js";
dotenv.config();

const port = 8080;
const app = express();
const conectToDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
};

conectToDb();

app.use(express.json());

app.use(cors());

app.get("/", async (_request, response) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const user = await userModel.find();

  const accessToken = jwt.sign(
    {
      data: user,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
  response.status(200).json(accessToken);
});

app.use("/", userRouter);

app.use("/", postRouter);

app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
