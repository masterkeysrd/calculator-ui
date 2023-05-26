import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../../services/AuthService";
import { AxiosError } from "axios";

export function useSignUp() {
  const router = useRouter();
  const error = ref("");
  const loading = ref(false);

  async function signUp(username: string, password: string) {
    loading.value = true;
    try {
      await AuthService.signUp(username, password);
      router.push("/register-success");
    } catch (err) {
      if (err instanceof AxiosError) {
        error.value = err.response?.data?.message;
        return;
      }

      error.value = "Something went wrong";
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    error,
    loading,
    signUp,
  }
}
