import { compare } from "bcrypt";
import { userModel } from "../../schema/user.schema.js";
import jwt from "jsonwebtoken";

export const login = async (request, response) => {
  const { email, password } = request.body;
  const JWT_SECRET = process.env.JWT_SECRET;

  const user = await userModel.findOne({ email });
  if (!user) {
    return response
      .status(400)
      .json({ message: "ERROR: USER NOT FOUND... !!!" });
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return response
      .status(400)
      .json({ message: "ERROR: PASSWORD IS INCORRECT... !!!" });
  }
  const accessToken = jwt.sign(
    {
      data: user,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
  response.status(200).json(accessToken);
};
