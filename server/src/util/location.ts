import axios from "axios";
import dotenv from "dotenv";
import { BadRequestError } from "../common/errors/bad-request-error";

dotenv.config();
const { USER_LOCAL_LOCATION_PATE } = process.env;
export const getLocationFromIp = async () => {
  let response;
  response = await axios.get(`${USER_LOCAL_LOCATION_PATE}`);
  const data = response.data;

  if (!data) {
    const error = new BadRequestError("Could not find your current location");
    throw error;
  }
  const location = {
    city: data.city,
    lat: data.latitude,
    lon: data.longitude,
  };

  return location;
};
