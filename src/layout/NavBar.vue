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
        <template v-if="isAuthenticated">
          <div class="d-flex justify-end align-center">
            <div>
              <WelcomeUser />
            </div>
            <div class="ml-3">
              <LogoutButton />
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
import LogoutButton from "../components/auth/LogoutButton.vue";
import WelcomeUser from "../components/users/WelcomeUser.vue";

export default defineComponent({
    name: "NavBar",
    components: { WelcomeUser }
});
</script>

<script lang="ts" setup>
const isAuthenticated = useIsAuthenticated();

const links = [
  { name: "Home", path: "/home" },
  { name: "Records", path: "/records" },
];
</script>
