import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { StoreContext, ctx } from "../shared/store";

const AppSnackbar = () => {
  const { handleSnackbar, snackbar } = React.useContext<ctx>(StoreContext);

  return (
    <Snackbar
      open={!!snackbar}
      autoHideDuration={6000}
      onClose={() => handleSnackbar(null)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => handleSnackbar(null)}
        severity={snackbar?.severity}
        sx={{ width: "100%" }}
      >
        {snackbar?.message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
