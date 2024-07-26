// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"

import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy',
    {
        mounted(element, link) {
            console.log(link.value, element);
            useIntersectionObserver(
                element,
                ([{ isIntersecting }]) => {
                    if(isIntersecting){
                        element.src = link.value;
                    }
                },
            )
        }
    }
)
