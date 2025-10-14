import { userModel } from "../../schema/user.schema.js";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (request, response) => {
  const { email, username, password, bio, profilePicture } = request.body;
  const JWT_SECRET = process.env.JWT_SECRET;
  const curentUser = await userModel.findOne({ email });
  if (curentUser) {
    return response
      .status(400)
      .json({ message: "ERROR USER ALREADY EXISTS... !!!" });
  }
  const hashedPassword = await hash(password, 10);
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: hashedPassword,
    profilePicture: profilePicture,
    bio: bio,
  });

  const accessToken = jwt.sign(
    {
      data: newUser,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
  response.status(200).json(accessToken);
};
