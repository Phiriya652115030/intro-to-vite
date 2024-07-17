import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://localhost:3004/events/123',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get<EventItem[]>('/events')
    },
    getEventById(id: number): Promise<axiosResponse<EventItem>> {
        return apiClient.get<EventItem>('events/' + id.toString())
    }
}