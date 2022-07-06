import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '@/views/CharactersView.vue'
import CharacterPage from '@/views/CharacterPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CharactersView
  },
  {
    path: '/:id',
    name: 'character-page',
    component: CharacterPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
