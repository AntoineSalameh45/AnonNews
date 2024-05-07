import axios, {AxiosError} from 'axios';

export interface iCreateUserRequestBody {
  email: string;
  password: string;
  token_expires_in?: string;
}

export interface iCreateUserResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
}
export interface iErrorResponse {
  message: string;
}

const createUser = async (
  userData: iCreateUserRequestBody,
): Promise<iCreateUserResponse> => {
  try {
    const response = await axios.post(
      'https://backend-practice.euriskomobility.me/signup',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    if ((error as AxiosError).response) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const responseData = axiosError.response.data as iErrorResponse;
        console.error('Error:', responseData.message);
        throw new Error(responseData.message || 'Failed to create user');
      } else {
        console.error('Error: No response received from server');
        throw new Error('No response received from server');
      }
    } else if ((error as AxiosError).request) {
      console.error('Error:', (error as AxiosError).request);
      throw new Error('No response received from server');
    } else {
      console.error('Error:', (error as Error).message);
      throw new Error((error as Error).message || 'Failed to create user');
    }
  }
};

export default createUser;
