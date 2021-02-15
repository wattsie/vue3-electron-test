
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './assets/tailwind.css'

import { FontAwesomeIcon } from "@/plugins/fontawesome"

const app = createApp(App)
app.use(store)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
