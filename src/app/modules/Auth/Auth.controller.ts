import { Request, Response } from "express";
import { authService } from "./Auth.service";

const loginUser = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authService.login(data);
  try {
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
