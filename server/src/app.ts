import express from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import { NotFoundError } from "./common/errors/not-found-error";
import { weatherRouter } from "./routes/weather-routes";
import { errorHandler } from "./middlewares/error-handler";
import { authRouter } from "./routes/auth-routes";

dotenv.config();

const app = express();

app.use(json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.CLIENT_ENV}`);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/weather", weatherRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
