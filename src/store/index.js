import { createStore } from 'vuex'
import charactersModule from '@/store/modules/charactersModule'
import preloaderModule from '@/store/modules/preloaderModule'
import episodesModule from '@/store/modules/episodesModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    charactersModule,
    preloaderModule,
    episodesModule
  }
})
