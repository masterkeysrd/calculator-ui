<template>
  <v-container>
    <h2>Calculator</h2>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field label="Input 1" type="number"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Input 2" type="number"></v-text-field>
        </v-col>
        <template v-for="widget in widgets" :key="widget.id">
          <v-col v-if="widget.symbol" :cols="widget.size">
            <v-btn size="large" :color="widget.btnColor" class="w-100">
              {{ widget.symbol }}
            </v-btn>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useListOperations } from "../../services/operation.service";
import { useOperationWidgetMapping } from "../../common/utils/operation-widget.util";

export default defineComponent({
  name: "Calculator",
});
</script>

<script lang="ts" setup>
const { operations } = useListOperations();
const widgets = useOperationWidgetMapping(operations);
</script>
