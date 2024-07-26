// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"
import { lazyImages } from "@/directives"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyImages)
app.mount('#app')


