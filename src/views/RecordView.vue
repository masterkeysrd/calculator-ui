<template>
  <v-container>
    <v-sheet rounded="lg" class="pa-5">
      <h1>Records</h1>
      <RecordList :records="records" @delete="onDelete"/>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import RecordList from "../components/record/RecordList.vue";
import { useDeleteRecord, useListRecords } from "../services/record.service";
import { Record } from "../types";

export default defineComponent({
  name: "RecordView",
  components: {
    RecordList,
  },
});
</script>

<script lang="ts" setup>
const records = ref<Record[]>([]);

const listRecords = useListRecords();
const deleteRecord = useDeleteRecord();

onMounted(async () => {
  records.value = await listRecords();
});

const onDelete = async (recordId: number) => {
  console.log("Deleting record", recordId);
  await deleteRecord(recordId);
  records.value = await listRecords();
};
</script>
