<template>
  <v-container style="max-width: 600px">
    <div class="mb-4 d-flex justify-end">
      <div style="max-width: 200px">
        <calculator-balance-card />
      </div>
    </div>
    <v-sheet rounded>
      <calculator-screen />
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalculatorBalanceCard from "../components/calculator/CalculatorBalanceCard.vue";
import CalculatorScreen from "../components/calculator/CalculatorScreen.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CalculatorBalanceCard,
    CalculatorScreen,
  },
});
</script>
