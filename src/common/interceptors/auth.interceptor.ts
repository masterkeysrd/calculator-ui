import {
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";

export function AuthRequestInterceptor(req: InternalAxiosRequestConfig) {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }

  return req;
}

export function AuthResponseInterceptor(res: AxiosResponse): AxiosResponse {
  if (res.status === HttpStatusCode.Forbidden) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    window.location.href = "/login";
  }

  return res;
}
