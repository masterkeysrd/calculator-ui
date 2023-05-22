<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <div class="mr-3">
        <router-link class="the-header-home-link" to="/">
          <h3 class="text-deep-purple-accent-4">Calculator</h3>
        </router-link>
      </div>
      <the-nav-bar />
      <v-spacer />
      <v-responsive max-width="300">
        <template v-if="isAuthenticated">
          <div class="d-flex justify-end align-center">
            <div class="d-none d-sm-none d-md-flex">
              <user-welcome-card />
            </div>
            <div class="ml-3">
              <auth-logout-button />
            </div>
          </div>
        </template>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useIsAuthenticated } from "../common/auth/login";
import AuthLogoutButton from "../components/auth/AuthLogoutButton.vue";
import UserWelcomeCard from "../components/users/UserWelcomeCard.vue";
import TheNavBar from "../layout/TheNavBar.vue";

export default defineComponent({
  name: "the-nav-bar",
  components: {
    AuthLogoutButton,
    UserWelcomeCard,
    TheNavBar,
  },
});
</script>

<script lang="ts" setup>
const isAuthenticated = useIsAuthenticated();
</script>

<style scoped>
.the-header-home-link {
  color: inherit;
  text-decoration: none;
}
</style>
