import { client } from "../common/http";
import config from '../common/config';

const baseUrl = `${config.apiUrl}/v1/auth`;

const AuthService = {
  login: async (username: string, password: string) => {
    const response = await client.post(`${baseUrl}/sign-in`, {
      username,
      password,
    });
    return response.data;
  },
  logout: async () => {
    const response = await client.post(`${baseUrl}/sign-out`);
    return response.data;
  }
};

export default AuthService;
