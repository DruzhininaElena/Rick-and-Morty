import axios from 'axios'

const episodesStore = {
  namespaced: true,
  state: {
    currentEpisodes: []
  },
  getters: {
    getCurrentEpisodes ({ currentEpisodes }) {
      return currentEpisodes
    }
  },
  mutations: {
    ADD_CURRENT_EPISODES (state, data) {
      state.currentEpisodes.push(data)
    },
    SET_CURRENT_EPISODES (state, data) {
      state.currentEpisodes = data
    }
  },
  actions: {
    async fetchEpisode ({ commit }, url) {
      try {
        const res = await axios(url)
        commit('ADD_CURRENT_EPISODES', res.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default episodesStore
