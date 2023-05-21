<template>
  <form id="login-form">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="password" />
    </div>
    <button type="submit" @click.prevent="login">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
});
</script>
