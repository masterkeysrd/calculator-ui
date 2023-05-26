<template>
  <v-dialog
    :model-value="$props.modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    persistent
    width="300"
  >
    <v-card class="text-center">
      <v-card-title class="headline">Delete Record</v-card-title>
      <v-card-text>Are you sure you want to perform this action?</v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="cancel">Cancel</v-btn>
        <v-btn color="error" @click="confirm">Accept</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue", "confirm", "cancel"]);

const confirm = () => {
  emits("update:modelValue", false);
  emits("confirm");
};

const cancel = () => {
  emits("update:modelValue", false);
  emits("cancel");
};
</script>
