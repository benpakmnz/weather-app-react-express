import { Request, Response, NextFunction } from "express";
import { HttpError } from "../common/errors/http-error";
import { handleFindOne, handleUserBuild } from "../services/userService";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  let user;
  try {
    user = await handleFindOne({ email });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!user) {
    try {
      user = await handleUserBuild({ email });
    } catch (err) {
      const error = new HttpError("Signing up failed, please try again.", 500);
      return next(error);
    }
  }
  res.status(201).send(user);
};
