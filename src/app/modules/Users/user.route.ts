import { Router } from "express";
import { userController } from "./user.controller";
import validateUserData from "../../middlewares/validation";
import { registrationValidationSchema } from "./user.validation";
const router = Router();

router.post(
  "/registration",
  validateUserData(registrationValidationSchema),
  userController.registerUser
);
export const userRouter = router;
