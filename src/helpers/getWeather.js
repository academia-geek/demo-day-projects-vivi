import axios from "axios";

export const getWeather = (query) => {
  const API_KEY = "28f129c38ac2483889e154733221507";
  return axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
