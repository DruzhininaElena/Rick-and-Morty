import axios from 'axios'
import url from '@/main'

const charactersStore = {
  namespaced: true,
  state: {
    characters: [],
    currentCharacter: {}
  },
  getters: {
    getCharacters ({ characters }) {
      return characters
    },
    getCurrentCharacter ({ currentCharacter }) {
      return currentCharacter
    }
  },
  mutations: {
    SET_CHARACTERS (state, data) {
      state.characters = data
    },
    SET_CURRENT_CHARACTER (state, data) {
      state.currentCharacter = data
    }
  },
  actions: {
    async fetchCharacters ({ state, commit }) {
      try {
        const res = await axios(`${url}/character`)
        commit('SET_CHARACTERS', res.data.results)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchCharacterById ({ state, commit }, id) {
      try {
        const res = await axios(`${url}/character/${id}`)
        commit('SET_CURRENT_CHARACTER', res.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default charactersStore
