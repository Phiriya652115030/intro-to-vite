<script>
export default {
  data() {
    return {
      auctionItems: [],
      searchDescription: "",
    };
  },
  methods: {
    fetchAuctionItems() {
      fetch("http://localhost:8080/auctions")
        .then(response => response.json())
        .then(data => {
          this.auctionItems = data;
        })
        .catch(error => console.error("Error fetching auction items:", error));
    },
    searchAuctionItems() {
      fetch(`http://localhost:8080/search?description=${this.searchDescription}`)
        .then(response => response.json())
        .then(data => {
          this.auctionItems = data;
        })
        .catch(error => console.error("Error searching auction items:", error));
    }
  },
  mounted() {
    this.fetchAuctionItems(); // Fetch all auction items on component mount
  }
};
</script>

<template>
    <div>
      <h1>Auction Items</h1>
      <input type="text" v-model="searchDescription" placeholder="Search by description" />
      <button @click="searchAuctionItems">Search</button>
  
      <ul>
        <li v-for="item in auctionItems" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Successful Bid: {{ item.successfulBid }}</p>
        </li>
      </ul>
    </div>
  </template>