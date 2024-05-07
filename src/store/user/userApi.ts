import {AxiosResponse} from 'axios';
import fetchUser from '../../utils/fetchUser';

const signupApi = async (
  email: string,
  password: string,
  token_expires_in: string,
) => {
  try {
    const response: AxiosResponse = await fetchUser.post('/signup', {
      email,
      password,
      token_expires_in,
    });

    if (response.status === 400) {
      throw new Error('Email already exists. Use the login screen!');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error signing up: ' + error.message);
  }
};

const loginApi = async (
  email: string,
  password: string,
  token_expires_in: string,
) => {
  try {
    const response: AxiosResponse = await fetchUser.post('/login', {
      email,
      password,
      token_expires_in,
    });

    if (response.status === 400) {
      throw new Error('Invalid email or password');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error logging in: ' + error.message);
  }
};

const refreshTokenApi = async (token: string, token_expires_in: string) => {
  try {
    const response: AxiosResponse = await fetchUser.post('/refresh-token', {
      refreshToken: token,
      token_expires_in,
    });

    if (response.status === 400) {
      throw new Error('Invalid refresh token');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error refreshing token: ' + error.message);
  }
};

export {signupApi, loginApi, refreshTokenApi};
