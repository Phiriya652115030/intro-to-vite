import {type AuctionItem } from './../types';
import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getAuctionItems(perPage: Number, page: Number) {
        return apiClient.get('/auctions?_limit=' + perPage + '&_page=' + page);
    },
    getAuctionItem(id: number) {
        return apiClient.get('/auctions/' + id);  
    },
    
    searchAuctionItemsByDescription(keyword: string, perPage: number, page: number):
        Promise<AxiosResponse<AuctionItem[]>> {
            return apiClient.get<AuctionItem[]>('/auctions?description=' + keyword + '&_limit=' + perPage + '&_page=' + page)
        }
}