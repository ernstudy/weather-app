import React from "react";
import { Box, Typography } from "@mui/material";

import {
  LocationOn,
  WaterDrop,
  WindPower,
  WindPowerTwoTone,
} from "@mui/icons-material";
import Loading from "./Loading";

export default function WeatherDate({ weather }) {
  return (
    <Box sx={{ textAlign: "center", margin: "10px 0", display: "grid" }}>
      {/* weather data  */}

      {!weather.city.trim() ? (
        <Loading />
      ) : (
        <>
          <Typography component="h2" variant="h6">
            <LocationOn /> {weather.city}, {weather.country}
          </Typography>
          <Box component="div" sx={{ maxWidth: "400px" }}>
            <Box
              component="img"
              src={weather.icon}
              alt="sunny"
              sx={{ width: "100%" }}
            ></Box>
          </Box>
          <Typography component="h4" variant="h6" sx={{ mt: "-80px" }}>
            {weather.conditionText}
          </Typography>
          <Typography
            component="h4"
            variant="h1"
            sx={{
              mt: "-40px",
              fontWeight: "700",
              fontFamily: "Lilita One, sans-serif",
              fontSize: "130px",
            }}
          >
            {weather.temp}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                padding: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                flexGrow: 1,
                borderRadius: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Humitity
              </Typography>
              <WaterDrop sx={{ color: "#fff" }} />
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                {weather.humidity}%
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                flexGrow: 1,
                borderRadius: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Wind
              </Typography>
              <WindPowerTwoTone sx={{ color: "#fff" }} />
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                {weather.wind} k/h
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
