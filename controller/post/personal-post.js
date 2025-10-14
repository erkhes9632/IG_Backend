import { postModel } from "../../schema/post.schema.js";

export const personalPost = async (req, res) => {
  const params = req.params;

  const mypost = await postModel.find({ user: params.userId });

  res.status(200).json(mypost);
};
