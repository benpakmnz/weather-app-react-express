import { CloseOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ShareForm: React.FC<{ onClose: () => void }> = (props) => {
  const [email, setEmail] = useState<string>("");

  return (
    <Grid container spacing={3} p={3}>
      <Grid item xs={10}>
        <Typography variant="h4" component="p">
          Share your Weather
        </Typography>
      </Grid>
      <Grid item xs={2} className="flex-item end">
        <IconButton onClick={props.onClose}>
          <CloseOutlined />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <form
          method="post"
          action={`mailto:${email}?subject=Check out my weather&&body=${window.location.href}`}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="what's the email"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(event: any) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="flex-item end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={email.length === 0}
              >
                Share
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ShareForm;
