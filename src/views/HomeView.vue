<template>
  <v-container style="max-width: 600px">
    <div class="mb-4 d-flex justify-end">
      <div style="max-width: 200px;">
        <BalanceCard />
      </div>
    </div>
    <v-sheet rounded>
      <Calculator />
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calculator from "../components/calculator/Calculator.vue";
import BalanceCard from "../components/calculator/BalanceCard.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Calculator,
    BalanceCard
},
});
</script>
