import { postModel } from "../../schema/post.schema.js";

export const postscreate = async (request, response) => {
  const { user, caption, images } = request.body;

  const post = await postModel.create({
    user,
    caption,
    images,
  });
  response.json(post);
};
