import React, { useEffect, useState } from "react";
import "./css/WeatherApp.css";
import { Box, Container } from "@mui/material";
import WeatherForm from "./WeatherForm";
import WeatherTitle from "./WeatherTitle";
import WeatherData from "./WeatherData";
import NotFound from "./NotFound";

// importing images
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import { Copyright } from "@mui/icons-material";
import CopyRight from "./CopyRight";

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
  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
    Drizzle: rainy,
  };

  // Loading city information
  const loadInfo = async (city = "paris") => {
    // if the city field is empty
    if (!city.trim()) {
      console.log("blank");
      setError((prevValue) => {
        return {
          ...prevValue,
          message: "This field is requied",
          error: true,
        };
      });
      return;
    }

    // console.log(city);

    // formatting weather state
    formattingWeather();

    try {
      const API_KEY = import.meta.env.VITE_API_KEY;

      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_KEY}`
      );

      const data = await respone.json();
      console.log(data);

      // Not Found
      if (data.cod === "404") {
        setError({
          message: "Please enter a valid city!",
          error: true,
        });
        return;
      }

      // set time out
      setTimeout(() => {
        // bg color
        const weatherColor = weatherColors[data.weather[0].main];
        // bg image
        const weatherImage = weatherImages[data.weather[0].main];

        setWeather({
          city: data.name,
          country: data.sys.country,
          temp: Math.floor(data.main.temp),
          icon: weatherImage,
          conditionText: data.weather[0].description,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          background: weatherColor,
        });
      }, 500);

      // session Storage
      // syncSessionStorage(data);

      // throw error
      setError({
        message: "",
        error: false,
      });
    } catch (error) {
      console.log(error);
      setError({
        error: true,
        message: "",
      });
    }
  };

  //  format weather state
  const formattingWeather = () => {
    setWeather({
      city: "",
      country: "",
      temp: "",
      icon: "",
      conditionText: "",
      wind: "",
      humidity: "",
    });
  };

  // const syncSessionStorage = (data) => {
  //   JSON.stringify(sessionStorage.setItem("item", data));
  // };

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    if (weather) {
      document.title = `Weather | ${weather.city}`;
      document.body.style.backgroundImage = weather.background;
    }
    // setLoading(false);
  }, [weather]);

  return (
    <Box sx={{ padding: "0 3% 1%" }}>
      <Container
        maxWidth="xs"
        className="weather_container"
        component="div"
        sx={{
          mt: 2,
          textAlign: "center",
        }}
        style={{
          backgroundImage:
            weather.background &&
            weather.background.replace("to right", "to top"),
        }}
      >
        <>{/* <WeatherTitle /> */}</>

        <>
          <WeatherForm onLoadInfo={loadInfo} error={error} weather={weather} />
        </>

        {!error.error ? <WeatherData weather={weather} /> : <NotFound />}
      </Container>

      {/* Copyright */}
      <CopyRight />
    </Box>
  );
}
