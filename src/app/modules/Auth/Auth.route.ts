import { Router } from "express";
import { authController } from "./Auth.controller";
import validateUserData from "../../middlewares/validation";
import { loginValidation } from "./auth.validation";
const router = Router();

router.post(
  "/login",
  validateUserData(loginValidation),
  authController.loginUser
);
export const authRouter = router;
