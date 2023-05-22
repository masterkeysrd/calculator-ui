<template>
  <v-app>
    <NavBar />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import NavBar from "../layout/NavBar.vue";
import { useLoadProfile } from "../stores/profile.store";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
  },
});
</script>

<script lang="ts" setup>
const loadProfile = useLoadProfile();

onMounted(() => {
  loadProfile();
});
</script>
