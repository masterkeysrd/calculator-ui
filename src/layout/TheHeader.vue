<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <div class="mr-3">
        <h3 class="text-deep-purple-accent-4">Calculator</h3>
      </div>
      <the-nav-bar />
      <v-spacer />
      <v-responsive max-width="300">
        <template v-if="isAuthenticated">
          <div class="d-flex justify-end align-center">
            <div>
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
        TheNavBar
    }
});
</script>

<script lang="ts" setup>
const isAuthenticated = useIsAuthenticated();
</script>
