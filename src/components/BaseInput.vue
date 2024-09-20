<script setup lang="ts">
import { defineModel } from 'vue';
  
interface BaseInputProps {
    label: string;
}
  
const props = withDefaults(defineProps<BaseInputProps>(), {
    label: '',
});
  
const modelValue = defineModel();
</script>

<template>
    <label v-if="label">
      {{ props.label }}
    </label>
    <input class="mb-6" v-bind="$attrs" v-model="modelValue" placeholder="label" />
  </template>
