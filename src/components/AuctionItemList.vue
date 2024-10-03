<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const auctionItems = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/auction-items'); // Adjust the endpoint as needed
    auctionItems.value = response.data;
  } catch (error) {
    console.error('Error fetching auction items:', error);
  }
});
</script>

<template>
    <div>
      <h1>Auction Items</h1>
      <ul>
        <li v-for="item in auctionItems" :key="item.id">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p v-if="item.successfulBid">Successful Bid: Yes</p>
          <p v-else>Successful Bid: No</p>
          <h3>Bids:</h3>
          <ul>
            <li v-for="bid in item.bids" :key="bid.id">
              Amount: {{ bid.bidAmount }} - Successful: {{ bid.successful }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>