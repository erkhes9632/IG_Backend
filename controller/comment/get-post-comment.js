import { commentModel } from "../../schema/comment.schema.js";

export const getPostComment = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await commentModel
      .find({ post: postId })
      .populate({
        path: "post",
        populate: { path: "user", select: "username profilePicture" },
      })
      .populate("user", "username profilePicture");
    res.status(200).json(comments);
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
};
