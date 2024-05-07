import axios from 'axios';
import {getValue} from './getCookie';

const fetchUser = axios.create({
  baseURL: 'https://backend-practice.euriskomobility.me',
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchUser.interceptors.request.use(
  async config => {
    const token = await getValue('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default fetchUser;
