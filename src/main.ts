// import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics'
// nprogress
import 'nprogress/nprogress.css'

const app = createApp(App)
const pageLimit = [null, 3, 1, 2, 1]

inject()
app.use(createPinia())
app.use(router)

app.mount('#app')