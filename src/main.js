import { createApp } from 'vue'
import App from './App.vue'
import vuexStore from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useStore } from 'vuex'

import './assets/main.scss'

const store = useStore()
const app = createApp(App).use(vuexStore)
app.use(VueAxios, axios, store)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
