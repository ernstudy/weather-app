import React, { useState } from "react";
import "./css/WeatherApp.css";
import { Box, Container, Typography } from "@mui/material";
import WeatherForm from "./WeatherForm";
import WeatherTitle from "./WeatherTitle";
import { LocationOn, WaterDrop } from "@mui/icons-material";

// importing images
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";

export default function WeatherApp() {
  // Weather data
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    icon: "",
    conditionText: "",
    wind: "",
    humidity: "",
  });

  // errors
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  // weather background color
  const weatherColors = {
    Clear: "linear-gradient(to right, #f3b07c, #fcd283",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff",
    Snow: "Linear-gradient(to right, #aff2ff, #fff",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec",
    Drizzle: "linear-gradient(to right, #aff2ff, #fff",
  };

  // weather background images
  const BackgroundImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
    Drizzle: rainy,
  };

  // Load information
  const loadInfo = async (city) => {
    if (!city.trim()) {
      console.log("blank");
      setError((prevValue) => {
        return {
          ...prevValue,
          message: "Write a city",
          error: true,
        };
      });
      return;
    }
    console.log(city);

    const API_KEY = import.meta.env.VITE_API_KEY;

    try {
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await respone.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xs" className="weather_container" sx={{ mt: 2 }}>
      <WeatherTitle />
      <WeatherForm onLoadInfo={loadInfo} error={error} />
      <Box sx={{ textAlign: "center", margin: "10px 0", display: "grid" }}>
        <Typography component="h2" variant="h6">
          <LocationOn /> Hinche, Haiti
        </Typography>
        <Box component="div" sx={{ maxWidth: "400px" }}>
          <Box
            component="img"
            src={sunny}
            alt="sunny"
            sx={{ width: "100%" }}
          ></Box>
        </Box>
        <Typography component="h4" variant="h6" sx={{ mt: "-100px" }}>
          text condition
        </Typography>
        <Typography
          component="h4"
          variant="h1"
          sx={{ mt: "-50px", fontWeight: "700" }}
        >
          86
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
              30%
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
              Humitity
            </Typography>
            <WaterDrop sx={{ color: "#fff" }} />
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              30%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
