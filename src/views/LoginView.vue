<template>
  <form id="login-form">
    <div>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        v-model="store.username"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="store.password"
      />
    </div>
    <button type="submit" @click.prevent="login">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthService from "../services/AuthService";
import { LoginStore } from "../stores/LoginStore";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      store: LoginStore,
    };
  },
  methods: {
    async login() {
      console.log("login", {
        username: this.store.username,
        password: this.store.password,
      });

      const response = await AuthService.login(
        this.store.username,
        this.store.password
      );

      const { access_token: accessToken, refresh_token: refreshToken } =
        response;

      this.store.login({ accessToken, refreshToken });
    },
  },
});
</script>
