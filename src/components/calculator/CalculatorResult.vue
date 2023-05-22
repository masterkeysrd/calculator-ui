<template>
  <v-col cols="12" md="12" v-if="props.show">
    <v-alert v-if="result" type="success" closable>
      <div>
        <div>
          <span class="font-weight-bold">Record ID:</span>&nbsp;
          <span>{{ result.recordId }}</span>
        </div>
        <div>
          <span class="font-weight-bold">Amount:</span>&nbsp;
          <span>{{ result.amount }}</span>
        </div>
        <div>
          <span class="font-weight-bold">Remaining Balance:</span>&nbsp;
          <span>{{ result.userBalance }}</span>
        </div>
        <div>
          <span class="font-weight-bold">Result:</span>&nbsp;
          <span>{{ result.result }}</span>
        </div>
      </div>
    </v-alert>
  </v-col>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useFormatCurrency } from '../../common/utils/currency.util';

export default defineComponent({
  name: "calculator-result",
});
</script>

<script lang="ts" setup>
interface Props {
  show: boolean;
  result: any;
}

const props: Props = defineProps<Props>();
const formatCurrency = useFormatCurrency();

const result = computed(() => {
  if (!props.result) {
    return null;
  }

  return {
    ...props.result,
    amount: formatCurrency(props.result.amount),
    userBalance: formatCurrency(props.result.userBalance),
  }
});
</script>
