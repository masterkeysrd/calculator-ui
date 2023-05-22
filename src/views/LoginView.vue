<template>
  <div class="d-flex justify-center align-center h-screen">
    <div class="login-container ma-5">
      <h1 class="text-center mb-5">Login</h1>
      <v-form id="login-form" ref="form" @submit.prevent="signIn">
        <v-text-field
          id="username"
          name="username"
          v-model="username"
          label="Username"
          :rules="rules.username"
          class="mb-5"
        ></v-text-field>
        <v-text-field
          id="password"
          label="Password"
          name="password"
          type="password"
          v-model="password"
          :rules="rules.password"
          class="mb-5"
        ></v-text-field>
        <div class="mb-5">
          <v-alert v-if="error" type="error" closable>
            {{ error }}
          </v-alert>
        </div>
        <div>
          <v-btn
            color="primary"
            variant="elevated"
            size="large"
            class="w-100"
            type="submit"
            >Login</v-btn
          >
        </div>
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
import { Ref, defineComponent, ref } from "vue";
import { useLogin } from "../common/auth/login";

export default defineComponent({
  name: "LoginForm",
});
</script>

<script lang="ts" setup>
const form: Ref<any> = ref(null);
const username = ref("");
const password = ref("");
const { login, error } = useLogin();

const rules = {
  username: [
    (v: string) => !!v || "Username is required",
    (v: string) => /.+@.+\..+/.test(v) || "Username must be a valid email",
  ],
  password: [(v: string) => !!v || "Password is required"],
};

async function signIn() {
  const { valid } = await form?.value?.validate() || {};
  if (!valid) {
    return
  };

  login(username.value, password.value);
}
</script>

<style scoped>
.login-container {
  width: 400px;
}
</style>
