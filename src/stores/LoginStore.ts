import { reactive } from "vue";

export const LoginStore = reactive({
    isLoggedIn: !!localStorage.getItem("token"),
    username: "",
    password: "",
    login(tokens: { accessToken: string, refreshToken: string }) {
        this.isLoggedIn = true;
        localStorage.setItem("token", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);

        sessionStorage.setItem("token", tokens.accessToken);
        sessionStorage.setItem("refreshToken", tokens.refreshToken);
    }
});