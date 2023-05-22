import { Ref, isRef, ref, unref, watchEffect } from "vue";
import axios from "axios";
import {
  AuthRequestInterceptor,
  AuthResponseInterceptor,
} from "../interceptors/auth.interceptor";

const client = axios.create();

client.interceptors.request.use(AuthRequestInterceptor);
client.interceptors.response.use(null, AuthResponseInterceptor);

export const useHttp = () => {
  const http = ref(client);
  return http;
};

export function useGet<T>(url: string | Ref<string>) {
  const result: Ref<T | null> = ref(null);
  const error: Ref<any> = ref(null);

  function doGet() {
    result.value = null;
    error.value = null;
    client
      .get(unref(url))
      .then((res) => res.data)
      .then((data) => (result.value = data))
      .catch((err) => (error.value = err));
  }

  if (isRef(url)) {
    watchEffect(doGet);
  } else {
    doGet();
  }

  return { result, error };
}

export default client;
