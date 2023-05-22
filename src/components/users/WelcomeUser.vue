<template>
  <template v-if="profile">
    <span class="text-teal-darken-2 welcome-text"
      >Hi {{ profile.username }}!</span
    >
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProfile } from "../../stores/profile.store";

defineComponent({
  name: "WelcomeUser",
});
</script>

<script lang="ts" setup>
const { profile } = useProfile();
</script>

<style scoped>
.welcome-text {
  font-weight: 600;
}
</style>
