<template>
  <v-container>
    <h2>Calculator</h2>
    <v-container>
      <v-form @submit.prevent ref="form">
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              label="Input 1"
              type="number"
              :rules="rules.number1"
              v-model="number1"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              label="Input 2"
              type="number"
              :rules="rules.number2"
              v-model="number2"
            ></v-text-field>
          </v-col>
          <ResultAlert :show="showResult" :result="result"></ResultAlert>
          <template v-if="error">
            <v-col cols="12" md="12">
              <v-alert v-if="error" type="error" closable>
                {{ error }}
              </v-alert>
            </v-col>
          </template>
          <template v-for="widget in widgets" :key="widget.id">
            <v-col v-if="widget.symbol" :cols="widget.size">
              <v-btn
                size="large"
                :color="widget.btnColor"
                class="w-100"
                @click="submitOperation(widget)"
              >
                {{ widget.symbol }}
              </v-btn>
            </v-col>
          </template>
        </v-row>
      </v-form>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Ref, defineComponent, ref, computed, unref } from "vue";
import { useListOperations } from "../../services/operation.service";
import { mapOperationsToWidget } from "../../common/utils/operation-widget.util";
import { usePerformCalculation } from "../../services/calculator.service";
import { OperationWidget } from "../../types";
import { useRefreshBalance } from "../../stores/profile.store";
import ResultAlert from "./ResultAlert.vue";

export default defineComponent({
  name: "Calculator",
  components: { ResultAlert },
});
</script>

<script lang="ts" setup>
const form: Ref<any> = ref(null);
const showResult = ref(true);
const number1 = ref(0);
const number2 = ref(0);

const rules = ref({
  number1: [],
  number2: [],
});

const { operations } = useListOperations();
const { result, error, performOperation } = usePerformCalculation();
const refreshBalance = useRefreshBalance();

const widgets = computed(() => {
  const unrefOperations = unref(operations);
  if (!unrefOperations) {
    return [];
  }

  return mapOperationsToWidget(unrefOperations as OperationWidget[]);
});

const submitOperation = async (operation: OperationWidget) => {
  showResult.value = false;
  await form.value.resetValidation();
  rules.value = operation.rules as any;
  const { valid } = await form.value.validate();

  if (!valid) {
    return;
  }

  await performOperation(operation.id, [
    number1.value.toString(),
    number2.value.toString(),
  ]);

  if (error.value) {
    return;
  }

  refreshBalance();
  showResult.value = true;
};
</script>
