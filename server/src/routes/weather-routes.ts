import express from "express";
import { getWeather } from "../controllers/weather-controllers";

const router = express.Router();
router.patch("/", getWeather);

export { router as weatherRouter };
