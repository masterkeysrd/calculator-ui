import { reactive } from "vue";

export const AuthStore = reactive({
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user") || "{}"),
});
