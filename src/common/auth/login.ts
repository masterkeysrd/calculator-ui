import { useJwt } from "@vueuse/integrations/useJwt";
import { useAccessToken } from "./token";
import { ref, watch } from "vue";
import AuthService from "../../services/AuthService";
import { useRouter } from "vue-router";
import { AxiosError } from "axios";
import { JwtPayload } from "jwt-decode";

export function useIsAuthenticated() {
  const token = useAccessToken();
  const { payload } = useJwt(token);
  const authenticated = ref(false);

  const checkIfAuthenticated = (newPayload: JwtPayload | null) => {
    authenticated.value = newPayload ? verifyPayload(newPayload) : false;
  };

  watch(payload, checkIfAuthenticated, { immediate: true });

  return authenticated;
}

export function useLogin() {
  const token = useAccessToken();
  const router = useRouter();
  const error = ref("");

  async function login(username: string, password: string) {
    try {
      const tokens = await AuthService.login(username, password);
      token.value = tokens.access_token;
      router.push("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        error.value = err.response?.data?.message;
      }
    }
  }

  return { login, error };
}

export function useLogout() {
  const token = useAccessToken();
  const router = useRouter();

  function logout() {
    token.value = "";
    router.push("/login");
  }

  return logout;
}

export function verifyPayload(payload: JwtPayload): boolean {
  const { exp } = payload;
  const now = Date.now() / 1000;

  return exp ? exp > now : false;
}
