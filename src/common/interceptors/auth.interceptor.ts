import {
  AxiosError,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";
import { useAccessToken } from "../auth/token";

export function AuthRequestInterceptor(req: InternalAxiosRequestConfig) {
  const token = useAccessToken();

  if (token.value) {
    req.headers["Authorization"] = `Bearer ${token.value}`;
  }

  return req;
}

export function AuthResponseInterceptor(error: AxiosError) {
  const res = error.response; 
  const req = error.config as any;

  if (req.skipAuth)  {
    return Promise.reject(error);
  }

  if (res?.status === HttpStatusCode.Unauthorized) {
    localStorage.removeItem("access_token");
    sessionStorage.removeItem("access_token"); 

    window.location.href = "/login";
    return;
  }

  return Promise.reject(error);
}
