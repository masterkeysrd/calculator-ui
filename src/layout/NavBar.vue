<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="nav-bar__menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>

      <div>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import AuthService from "../services/AuthService";
import { AuthStore } from "../stores/AuthStore";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
        authStore: AuthStore,
    };
  },
  methods: {
    async logout() {
    //   await AuthService.logout();
      this.authStore.logout();
      this.$router.push("/login");
    },
  },
});
</script>
