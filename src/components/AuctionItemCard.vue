<script setup lang="ts">
import { ref } from "vue";
import { type AuctionItem } from '@/types'
const props = defineProps<{
  auctionItem: AuctionItem
}>()

</script>

<template>
 
  <div class="event-class">
    <div 
    class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      
      <span>{{ auctionItem.name }} @ {{ auctionItem.description }} @ {{ auctionItem.successfulBid }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>