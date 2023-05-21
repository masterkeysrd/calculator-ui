<template>
  <div class="d-flex justify-center align-center h-screen">
    <div class="login-container">
      <h1 class="text-center mb-5">Login</h1>
      <v-form id="login-form">
        <v-text-field
          id="username"
          name="username"
          v-model="store.username"
          label="Username"
        ></v-text-field>
        <v-text-field
          id="password"
          label="Password"
          name="password"
          type="password"
          v-model="store.password"
        ></v-text-field>
        <v-btn
          color="primary"
          variant="elevated"
          size="large"
          class="w-100"
          @click.prevent="login"
          >Login</v-btn
        >
      </v-form>
      <div class="mt-5">
        <v-btn
          text
          color="secondary"
          size="large"
          class="w-100"
          @click="$router.push('/register')"
        >
          Create new account
        </v-btn>
      </div>
    </div>
  </div>
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
  mounted() {
    if (this.store.isLoggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    async login() {
      const response = await AuthService.login(
        this.store.username,
        this.store.password
      );

      const { access_token: accessToken, refresh_token: refreshToken } =
        response;

      this.store.login({ accessToken, refreshToken });
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.login-container {
  width: 400px;
}
</style>
