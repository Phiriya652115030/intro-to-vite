import {type AuctionItem } from './../types';
import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAuctionItems(perPage: Number, page: Number) {
        return apiClient.get('/auctions?_limit=' + perPage + '&_page=' + page)
    },
    getAuctionItem(id: number) {
        return apiClient.get('/auctions')
    },
    searchAuctionItemsByDescription(keyword: string, perPage: number, page: number):
        Promise<AxiosResponse<AuctionItem[]>> {
            return apiClient.get<AuctionItem[]>('/auctions?name=' + keyword + '&_limit=' + perPage + '&_page=' + page)
        }
}