<script setup lang="ts">
 import { ref } from 'vue'
 import type { Ref } from 'vue'
 import type { EventItem } from '@/type'
 const event = ref<EventItem | null> (null)

</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

