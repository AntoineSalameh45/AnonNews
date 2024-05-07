import axios from 'axios';

const fetchWeatherApi = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default fetchWeatherApi;
