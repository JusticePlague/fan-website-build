import './assets/main.css'

import 'nprogress/nprogress.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'


import TheAlert from '/src/components/modalcomp/TheAlert.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('TheAlert', TheAlert)

app.use(createPinia())
app.use(router)

app.mount('#app')
