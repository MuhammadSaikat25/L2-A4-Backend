import { Request, Response } from "express";
import { authService } from "./Auth.service";
import { UserModel } from "../Users/user.model";

const loginUser = async (req: Request, res: Response) => {
 
  const data = req.body;
  const isUserExist = await UserModel.findOne({ email: data.email });
 
  if (!isUserExist) {
    res.json({
      message: "User does not found",
    });
    return;
  }

  try {
    const result = await authService.login(data, res);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const authController = { loginUser };
