<template>
  <v-container>
    <v-sheet rounded="lg" class="pa-5">
      <h1>Records</h1>
        <record-list />
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import RecordList from "../components/record/RecordList.vue";
</script>
