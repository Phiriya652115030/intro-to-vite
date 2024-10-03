<script setup lang="ts">

import { defineModel } from 'vue';
  
interface BaseInputProps {
    label: string;
}
  
const props = withDefaults(defineProps<BaseInputProps>(), {
    label: '',
});
  
const modelValue = defineModel();

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement)?.value)
}
</script>

<template>
    <label v-if="label">
      {{ props.label }}
    </label>
    <input class="mb-6" v-model="modelValue" placeholder="label" 
    @input="updateValue($event)"
    v-bind="$attrs"/>
  </template>
