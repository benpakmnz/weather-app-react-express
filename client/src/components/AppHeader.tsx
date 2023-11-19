import React from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { StoreContext, ctx } from "../shared/store";

const AppHeader: React.FC = () => {
  const { handleLogin, uid } = React.useContext<ctx>(StoreContext);
  return (
    <header>
      <Grid container>
        <Grid item xs={11}>
          <Typography
            variant="h6"
            component="h1"
            className="app-title flex-item center"
          >
            WhatsYourWeather
          </Typography>
        </Grid>
        {uid && (
          <Grid item xs={1} className="flex-item end">
            <Tooltip title="sign out">
              <IconButton
                onClick={() => {
                  handleLogin(null);
                }}
              >
                <ExitToAppIcon fontSize="medium" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Grid>
        )}
      </Grid>
    </header>
  );
};

export default AppHeader;
