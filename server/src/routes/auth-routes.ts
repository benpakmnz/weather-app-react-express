import express from "express";
import { body } from "express-validator";
import { login } from "../controllers/auth-controllers";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/login",
  [body("email").normalizeEmail().isEmail().withMessage("Email must be valid")],
  validateRequest,
  login
);

export { router as authRouter };
