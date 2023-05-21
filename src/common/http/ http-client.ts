import { ref } from "vue";
import axios from "axios";
import {
  AuthRequestInterceptor,
  AuthResponseInterceptor,
} from "../interceptors/auth.interceptor";

const client = axios.create();

client.interceptors.request.use(AuthRequestInterceptor);
client.interceptors.response.use(AuthResponseInterceptor);

export const useHttp = () => {
  const http = ref(client);

  return http;
};

export default client;
