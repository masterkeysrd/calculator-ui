<template>
  <v-container>
    <v-sheet rounded="lg" class="pa-5">
      <h1>Records</h1>
      <RecordList :records="records" />
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecordList from "../components/record/RecordList.vue";
import { useListRecords } from '../services/record.service';

export default defineComponent({
  name: "RecordView",
  components: {
    RecordList,
  },
});
</script>

<script lang="ts" setup>
  const { records } = useListRecords();
</script>
