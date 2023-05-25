import {
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";
import { useAccessToken } from "../auth/token";
import { useRouter } from "vue-router";

export function AuthRequestInterceptor(req: InternalAxiosRequestConfig) {
  const token = useAccessToken();

  if (token.value) {
    req.headers["Authorization"] = `Bearer ${token.value}`;
  }

  return req;
}

export function AuthResponseInterceptor(error: any) {
  const res = error.response;
  if (res.status === HttpStatusCode.Unauthorized) {
    const token = useAccessToken();
    const router = useRouter();
    token.value = "";
    router.push("/login");
  }

  return Promise.reject(error);
}
