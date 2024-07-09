import { UserModel } from "../Users/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const login = async (playLoad: { email: string; password: string }) => {
  const { email, password } = playLoad;

  const isUserExist = await UserModel.findOne({ email });
  if (!isUserExist) {
    throw new Error("User does not found");
  }

  const checkPassword = await bcrypt.compare(password, isUserExist.password);
  if (!checkPassword) {
    throw new Error("Password does't match");
  }
  const jwtObj = {
    email: isUserExist.email,
    role: isUserExist.role,
    id: isUserExist._id,
  };
  const token = jwt.sign(jwtObj, config.JWT!, { expiresIn: "10d" });
  return token
};

export const authService = {
  login,
};
