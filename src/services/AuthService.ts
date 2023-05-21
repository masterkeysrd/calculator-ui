import { client } from "../common/http";

const API_URL = "http://localhost:8080/api/v1/auth";

const AuthService = {
  login: async (username: string, password: string) => {
    const response = await client.post(`${API_URL}/sign-in`, {
      username,
      password,
    });
    return response.data;
  },
};

export default AuthService;
