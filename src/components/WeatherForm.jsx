import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function WeatherForm({ onLoadInfo, error }) {
  // name of city
  const [city, setCity] = useState("");

  // submit event hundle
  const hundleSubmit = (event) => {
    event.preventDefault();
    onLoadInfo(city);
    setCity("");
  };

  return (
    <Box
      component="form"
      autoComplete="false"
      onSubmit={hundleSubmit}
      sx={{ display: "grid", gap: 1 }}
    >
      <TextField
        id="city"
        value={city}
        variant="outlined"
        label="City"
        onChange={(e) => setCity(e.target.value)}
        error={error.error}
        helperText={error.message}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
}
