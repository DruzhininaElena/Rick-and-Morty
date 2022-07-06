import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const url = 'https://rickandmortyapi.com/api'
export default url

createApp(App).use(store).use(router).mount('#app')
