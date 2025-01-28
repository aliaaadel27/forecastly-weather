import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY,
    },
  });
  return response.data;
};

export const fetchForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY,
    },
  });
  return response.data;
};
