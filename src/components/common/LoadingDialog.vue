<template>
  <v-dialog
    :model-value="$props.modelValue"
    width="400"
    persistent
  >
    <v-card class="text-center" height="150">
      <v-card-text>
        <div class="mb-5">
          Loading...
        </div>
        <v-progress-circular
          indeterminate
          size="64"
          color="primary"
        ></v-progress-circular>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
defineProps(["modelValue"]);
</script>
