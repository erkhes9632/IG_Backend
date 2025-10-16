import { commentModel } from "../../schema/comment.schema.js";

export const createComment = async (req, res) => {
  const userId = req.user._id;
  const { postId, comments } = req.body;

  const createdComment = await commentModel.create({
    user: userId,
    post: postId,
    comments,
  });
  res.status(200).json(createdComment);
};
