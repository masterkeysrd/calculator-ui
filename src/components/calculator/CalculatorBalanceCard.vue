<template>
  <v-row class="text-end">
    <v-col cols="6" md="6" class="py-0">
      <span class="text-h6">Balance</span>
    </v-col>
    <v-col cols="6" md="6" class="py-0">
      <span class="text-h6 fw-bold" v-bind:class="balanceClass">
        {{ balanceText }}
      </span>
    </v-col>
    <v-col cols="6" md="6">
      <span class="text-h6">In Flight</span>
    </v-col>
    <v-col>
      <span class="text-h6 fw-bold">
        {{ inFlightBalanceText }}
      </span>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useFormatCurrency } from "../../common/utils/currency.util";
import {
  useProfileBalance,
  useLoadProfileBalance,
} from "../../stores/profile.store";

export default defineComponent({
  name: "calculator-balance-card",
});
</script>

<script lang="ts" setup>
const { balance } = useProfileBalance();

// TODO: add error handling
const { } = useLoadProfileBalance();
const formatCurrency = useFormatCurrency();


const balanceClass = computed(() => {
  return balance.value.amount > 0 ? "text-success" : "text-error";
});

const balanceText = computed(() => {
  return formatCurrency(balance.value.amount);
});

const inFlightBalanceText = computed(() => {
  return formatCurrency(balance.value.inFlightAmount);
});
</script>
