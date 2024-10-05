<script setup lang="ts">
import AuctionItemCard from '@/components/AuctionItemCard.vue';
import BaseInput from '@/components/BaseInput.vue';
import { ref, onMounted, computed, watchEffect } from 'vue';
import AuctionItemService from '@/services/AuctionItemService';
import type { AuctionItem } from '@/types'
import { useRouter } from 'vue-router';


const router = useRouter();
const auctionItems = ref<AuctionItem[] | null>(null)
const totalItems = ref(0);
const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalItems.value / 3)
    return page.value < totalPages
  })
const keyword = ref('');
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
});
const page = computed(() => props.page)
onMounted(() => {
  watchEffect(() => {
    updateKeyword('');
  });
});

function updateKeyword(value: string) {
  let queryFunction;

  if (value === '') {
    
    if (page.value !== undefined) {
      queryFunction = AuctionItemService.getAuctionItems(3, page.value);
    } else {
      console.error('Page value is undefined');
      return; // Exit if the page value is not defined
    }
  } else {
    // Use the provided value correctly
    queryFunction = AuctionItemService.searchAuctionItemsByDescription(value, 3, page.value);
  }

  queryFunction
    .then((response) => {
      auctionItems.value = response.data; // Update auction items
      totalItems.value = response.headers['x-total-count']; // Update total count
    })
    .catch(() => {
      // Handle network error, for example, redirecting to an error page
      router.push({ name: 'NetworkError' }); // Ensure this route exists
    });
}

</script>

<template>
    <div>
      <h1>Auction Items</h1>
      <div class="flex flex-col items-center">
        <div class="w-64">
          <BaseInput
  v-model="keyword"
  type="text"
  label="Search by description..."
  @input="updateKeyword(keyword)"
/>
        </div>

<AuctionItemCard v-for="auctionItem in auctionItems" :key="auctionItem.id" :auction-item="auctionItem"></AuctionItemCard>
        
        <div class="flex w-[290px]">
            <RouterLink
    id="page-prev"
    :to="{ name: 'auction-item', query: { page: page - 1 } }"
    rel="prev"
    v-if="page != 1"
    class="flex-1 no-underline text-[#2c3e50] text-left"
    >&#60; Prev Page</RouterLink
    >

    <RouterLink 
    id="page-next"
    :to="{ name: 'auction-item',query: { page: page + 1 } }"
    rel="next"
    v-if="hasNextPage"
    class="flex-1 no-underline text-[#2c3e50] text-right"
    >Next Page &#62;</RouterLink
    >
  
          
        </div>
      </div>
    </div>
  </template>