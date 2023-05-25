<template>
  <v-btn v-for="link in links" :key="link.name" :to="link.path" :class="link.class" text="true">
    {{ link.name }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "the-nav-bar",
});
</script>

<script lang="ts" setup>
const links = [
  { name: "Home", path: "/home", class: 'd-none d-sm-none d-md-flex' },
  { name: "Records", path: "/records" },
];
</script>
