<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Operation</th>
          <th>Amount</th>
          <th>Balance</th>
          <th>Date</th>
          <th>Operation Result</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in props.records" :key="record.id">
          <td>{{ record.id }}</td>
          <!-- TODO: Operation type should be added -->
          <td>Testing</td>
          <td>{{ record.amount }}</td>
          <td >{{ record.userBalance }}</td>
          <td >{{ record.date }}</td>
          <td c>{{ record.result }}</td>
          <td class="text-end">
            <v-btn size="small" color="error" text>
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecordList",
});
</script>

<script lang="ts" setup>
import { Record } from "../../types";

interface RecordProps {
  records: Record[];
}

const props = defineProps<RecordProps>();
</script>