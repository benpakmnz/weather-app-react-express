import { AlertColor } from "@mui/material";

export interface IWeatherInfo {
  temp: number;
  minTemp: number;
  maxTemp: number;
  feelLike: number;
  windSpeed: number;
  clouds: number;
  humidity: number;
}

export interface IWeatherData {
  cityName: string;
  info: IWeatherInfo;
  description: string;
  icon: string;
  timeStemp: string;
}

export interface ISnackbarProps {
  message: string;
  severity: AlertColor;
}
