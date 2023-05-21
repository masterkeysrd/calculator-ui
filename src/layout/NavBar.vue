<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <div class="mr-3">
        <h3 class="text-deep-purple-accent-4">Calculator</h3>
      </div>
      <v-btn v-for="link in links" :key="link.name" :to="link.path" text>
        {{ link.name }}
      </v-btn>

      <v-spacer></v-spacer>
      <v-responsive max-width="300">
        <div class="d-flex justify-end align-center">
          <div>
            <span class="text-teal-darken-2" style="font-weight: 600"
              >Hi {{ authStore.user?.username }}!</span
            >
          </div>
          <div class="ml-3">
            <v-btn
              v-if="authStore.isLoggedIn"
              color="secondary"
              size="small"
              variant="elevated"
              class="w-100"
              @click="logout"
            >
              Logout
            </v-btn>
          </div>
        </div>
      </v-responsive>
    </v-container>
  </v-app-bar>
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
      links: [
        { name: "Home", path: "/home" },
        { name: "Records", path: "/records" },
      ],
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
