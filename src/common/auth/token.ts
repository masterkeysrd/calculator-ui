import { useStorage } from "@vueuse/core";

export function useAccessToken() {
  const sessionToken = useStorage("token", "", sessionStorage);
  return sessionToken;
}