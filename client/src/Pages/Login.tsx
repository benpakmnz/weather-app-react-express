import React, { useState } from "react";
import { Button, Card, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { StoreContext, ctx } from "../shared/store";
import apiConnect from "../services/apiConnect";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { handleLogin, handleSnackbar } = React.useContext<ctx>(StoreContext);
  const api = new apiConnect();

  const login = async () => {
    setError(null);
    try {
      const res = await api.post("auth/login", {
        email: email,
      });
      handleLogin(res.data.id);
      navigate("/");
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        handleSnackbar({
          message: "Network Error, please try again later",
          severity: "error",
        });
      } else {
        setError(error.response?.data.errors[0].message || error.message);
      }
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    login();
  };

  return (
    <Card className="card-container">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Whats Your email"
              variant="outlined"
              error={!!error}
              helperText={error}
              size="small"
              fullWidth
              onChange={(event: any) => {
                event.keyCode === 13 ? login() : setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} className="flex-item end">
            <Button
              type="submit"
              variant="outlined"
              size="small"
              color="primary"
              disabled={email.length === 0}
              endIcon={<SendIcon fontSize="small" />}
            >
              login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default Login;
