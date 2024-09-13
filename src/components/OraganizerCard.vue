<script setup lang="ts">
import { ref } from "vue";
import { type Organizer } from '@/types'
const props = defineProps<{
  organizer: Organizer
}>()

</script>

<template>
 
  <div class="event-class">
    <div 
    class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ props.organizer }}</h2>
      <span>{{ organizer.organizationName }} @ {{ organizer.address }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>