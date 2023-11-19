import React, { useState, createContext, useEffect } from "react";
import { ISnackbarProps, IWeatherData } from "./Interfaces";
import rainNight from "../utils/images/rainy-night.jpg";
import rainDay from "../utils/images/rainy-day.jpg";
import sunnyDay from "../utils/images/summer-day.jpg";
import sunnyNight from "../utils/images/summer-night.jpg";
import { AlertColor } from "@mui/material";

export interface ctx {
  uid: string | null;
  setWeatherData: (weatherData: IWeatherData) => void;
  handleLogin: (uid: string | null) => void;
  handleSnackbar: (snackbar: ISnackbarProps | null) => void;
  snackbar: { message: string; severity: AlertColor } | null;
  weatherData: IWeatherData;
  backgroundImage: string;
  city: string;
  setCity: (city: string) => void;
}

export const StoreContext = createContext<ctx>({
  uid: null,
  setWeatherData: (weatherData: IWeatherData) => {},
  handleLogin: (uid: string | null) => {},
  handleSnackbar: (snackbar: ISnackbarProps | null) => {},
  weatherData: {
    cityName: "",
    info: {
      temp: 0,
      minTemp: 0,
      maxTemp: 0,
      feelLike: 0,
      windSpeed: 0,
      clouds: 0,
      humidity: 0,
    },
    description: "",
    icon: "",
    timeStemp: "",
  },
  backgroundImage: sunnyDay,
  snackbar: null,
  city: "",
  setCity: (city: string) => {},
});

const StoreContextProvider = (props: { children: React.ReactElement }) => {
  const [uid, setUid] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>(sunnyDay);
  const [snackbar, setSnackbar] = useState<ISnackbarProps | null>(null);
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<IWeatherData>({
    cityName: "",
    info: {
      temp: 0,
      minTemp: 0,
      maxTemp: 0,
      feelLike: 0,
      windSpeed: 0,
      clouds: 0,
      humidity: 0,
    },
    description: "",
    icon: "",
    timeStemp: "",
  });

  const handleImage = () => {
    const temp = weatherData.info.temp;
    const isRain = weatherData.info.clouds;
    const time = new Date(weatherData.timeStemp).getHours();
    const isDay = time < 18 && time > 6;
    if (temp < 10 || isRain > 60) {
      setBackgroundImage(isDay ? rainDay : rainNight);
    } else {
      setBackgroundImage(isDay ? sunnyDay : sunnyNight);
    }
  };

  const handleLogin = (uid: string | null) => {
    setUid(uid);
    if (uid) {
      localStorage.setItem("userId", uid);
    } else {
      localStorage.removeItem("userId");
    }
  };

  const handleSnackbar = (senackbar: ISnackbarProps | null) => {
    setSnackbar(senackbar);
  };

  useEffect(() => {
    handleImage();
  }, [weatherData]);

  return (
    <StoreContext.Provider
      value={{
        uid,
        handleLogin,
        weatherData,
        setWeatherData,
        backgroundImage,
        handleSnackbar,
        snackbar,
        setCity,
        city,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
