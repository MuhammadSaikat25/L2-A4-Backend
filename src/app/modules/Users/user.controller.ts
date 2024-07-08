import catchAsync from "../../../utils/catchAsync";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { userService } from "./user.service";

const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await userService.register(req.body);
    try {
      res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const userController = {
  registerUser,
};
