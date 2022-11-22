import { createApp } from 'vue'
import App from './App.vue'
import vuexStore from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.scss'

const app = createApp(App).use(vuexStore)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.mount('#app')
