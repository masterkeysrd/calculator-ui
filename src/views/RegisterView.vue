<template>
  <div class="d-flex justify-center align-center h-screen">
    <div class="register-view-container ma-5">
      <div class="mb-5 text-center">
        <h1>Sign Up</h1>
        <span>It's quick and easy.</span>
      </div>
      <v-form id="reg" name="reg" ref="form" @submit.prevent="register">
        <v-text-field
          id="reg-username"
          name="reg-username"
          autofocus
          v-model="username"
          label="Username"
          :rules="rules.username"
          class="mb-5"
          type="email"
        ></v-text-field>
        <v-text-field
          id="reg-password"
          label="New Password"
          type="password"
          name="reg-password"
          autocomplete="new-password"
          v-model="password"
          :rules="rules.password"
          class="mb-5"
        ></v-text-field>
        <div class="mb-5">
          <v-alert v-if="error" type="error" closable>
            {{ error }}
          </v-alert>
        </div>
        <div class="mb-5">
          <v-btn
            color="primary"
            variant="elevated"
            size="large"
            class="w-100"
            type="submit"
            :loading="loading"
            >Sign Up</v-btn
          >
        </div>
      </v-form>
      <div>
        <div class="text-center mb-2">
          <span>Already have an account?</span>
        </div>
        <v-btn
          text="true"
          color="secondary"
          size="large"
          class="w-100"
          @click="$router.push('/login')"
          >
          Login
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { useSignUp } from "../common/auth/sign-up";

export default defineComponent({
  name: "LoginForm",
});
</script>

<script lang="ts" setup>
const form: Ref<any> = ref(null);
const username = ref("");
const password = ref("");
const { loading, error, signUp } = useSignUp();

const rules = {
  username: [
    (v: string) => !!v || "Username is required",
    (v: string) => v.length >= 3 || "Username must be at least 3 characters",
    (v: string) => /.+@.+\..+/.test(v) || "Username must be a valid email",
  ],
  password: [
    (v: string) => !!v || "Password is required",
    (v: string) => v.length >= 8 || "Password must be at least 8 characters",
  ],
};

async function register() {
  const { valid } = (await form?.value?.validate()) || {};
  if (!valid) {
    return;
  }

  signUp(username.value, password.value);
}
</script>

<style scoped>
.register-view-container {
  width: 400px;
}
</style>
