import { client } from "../common/http";
import config from "../common/config";

const baseUrl = `${config.apiUrl}/v1/auth`;

const reqConfig = {
  skipAuth: true,
} as any;

const AuthService = {
  login: async (username: string, password: string) => {
    const body = { username, password };
    const response = await client.post(`${baseUrl}/sign-in`, body, reqConfig);
    return response.data;
  },
  logout: async () => {
    const response = await client.post(`${baseUrl}/sign-out`, {}, reqConfig);
    return response.data;
  },
  signUp: async (username: string, password: string) => {
    const body = { username, password };
    const response = await client.post(`${baseUrl}/sign-up`, body, reqConfig);
    return response.data;
  },
};

export default AuthService;
