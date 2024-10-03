<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue';
  import EventDetails from '@/components/EventDetails.vue'
  import type { Event } from '@/types'
  import { ref, onMounted, computed, watchEffect } from 'vue'
  import EventService from '@/services/EventService'
  import BaseInput from '@/components/BaseInput.vue'

  const events = ref<Event[] | null>(null)
  const totalEvents = ref(0)
  const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvents.value / 3)
    return page.value < totalPages
  })
  const props = defineProps({
    page: {
      type: Number,
      required: true
    }
  })
  const page = computed(() => props.page)
  onMounted(() => {
    watchEffect(() => {
      
    updateKeyword()
  })
})

const keyword = ref('')

function updateKeyword(value) {
  let queryFunction;
  if (keyword.value === '') {
    queryFunction = EventService.getEvents(3, page.value);
  } else {
    queryFunction = EventService.getEventsByKeyword(keyword.value, 3, page.value);
  }

  queryFunction
    .then((response) => {
      events.value = response.data;
      totalEvents.value = response.headers['x-total-count'];
    })
    .catch(() => {
      router.push({ name: 'NetworkError' });
    });
}
</script>

<template>
  <h1>Events For Good</h1>
    <!-- new element-->
  <div class="flex flex-col items-center">
    <div class="w-64">
      <BaseInput
      v-model="keyword"
      type="text"
      label="Search..."
      @input="updateKeyword"/>
    </div>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <EventDetails v-for="event in events" :key="'details-' + event.id" :event="event" ></EventDetails>
  <div class="flex w-[290px]">
  <RouterLink
    id="page-prev"
    :to="{ name: 'event-list-view', query: { page: page - 1 } }"
    rel="prev"
    v-if="page != 1"
    class="flex-1 no-underline text-[#2c3e50] text-left"
    >&#60; Prev Page</RouterLink
    >

    <RouterLink 
    id="page-next"
    :to="{ name: 'event-list-view',query: { page: page + 1 } }"
    rel="next"
    v-if="hasNextPage"
    class="flex-1 no-underline text-[#2c3e50] text-right"
    >Next Page &#62;</RouterLink
    >
  </div>
</div>
</template>

<style scoped>
  
</style>
