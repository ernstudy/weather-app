import { Box, Typography } from "@mui/material";
import React from "react";

export default function WeatherTitle() {
  return (
    <Box sx={{ position: "static" }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Weather App
      </Typography>
    </Box>
  );
}
