<template>
  <v-container style="max-width: 600px">
    <div>
      <h2>Balance: $200</h2>
    </div>
    <v-sheet rounded>
      <Calculator />
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calculator from "../components/calculator/Calculator.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Calculator,
  },
});
</script>
