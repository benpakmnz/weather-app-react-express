import { Grid, Paper, Tooltip, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import AirIcon from "@mui/icons-material/Air";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { IWeatherInfo } from "../../shared/Interfaces";

const WeatherInfo: React.FC<{ info?: IWeatherInfo }> = (props) => {
  const { info } = props;
  const handleItem = (icon: ReactNode, label: string, value?: string) => {
    return (
      <Grid item xs={4} style={{ textAlign: "center" }}>
        <Tooltip title={label}>
          <Paper variant="outlined" style={{ padding: "5px" }}>
            {icon}
            <Typography variant="body2">{value || "-"}</Typography>
          </Paper>
        </Tooltip>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} mt={2}>
      {handleItem(<ThermostatIcon />, "max temp", `${info?.maxTemp}°C`)}
      {handleItem(<ThermostatIcon />, "min temp", `${info?.minTemp}°C`)}
      {handleItem(<ThermostatIcon />, "feels like", `${info?.feelLike}°C`)}
      {handleItem(<AirIcon />, "wind speed", `${info?.windSpeed}°C`)}
      {handleItem(<CloudQueueIcon />, "clouds", `${info?.clouds}%`)}
      {handleItem(<CloudQueueIcon />, "humidity", `${info?.humidity}%`)}
    </Grid>
  );
};

export default WeatherInfo;
