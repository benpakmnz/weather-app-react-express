import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import { NotFoundError } from "./common/errors/not-found-error";
import { weatherRouter } from "./routes/weather-routes";
import { errorHandler } from "./middlewares/error-handler";
import { authRouter } from "./routes/auth-routes";
import path from "path";

// dotenv.config();

const app = express();

app.use(json());
app.use(express.static(path.join("public")));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use("/api/auth", authRouter);
app.use("/api/weather", weatherRouter);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
