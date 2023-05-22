<template>
  <v-app>
    <the-header />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../layout/TheHeader.vue";
import { useLoadProfile } from "../stores/profile.store";

export default defineComponent({
  name: "HomeView",
  components: {
    TheHeader,
  },
});
</script>

<script lang="ts" setup>
// TODO: add error handling
const {} = useLoadProfile();
</script>
