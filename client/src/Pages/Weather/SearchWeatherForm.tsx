import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const SearchWeatherForm: React.FC<{
  handleWeather: (city: string) => void;
  cityInput: string;
  error: string | null;
}> = (props) => {
  const [cityInput, setCityInput] = useState<string>(props.cityInput);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    props.handleWeather(cityInput);
  };

  return (
    <form onSubmit={submit}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        value={cityInput}
        error={!!props.error}
        helperText={props.error}
        onChange={(event: any) => {
          event.keyCode === 13
            ? submit(event)
            : setCityInput(event.target.value);
        }}
        id="input-with-icon-textfield"
        label="Whats Your city"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" edge="end">
                <SearchIcon fontSize="inherit" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchWeatherForm;
