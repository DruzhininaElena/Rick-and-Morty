const preloaderStore = {
  namespaced: true,
  state: {
    preloader: false
  },
  getters: {
    getPreloader ({ preloader }) {
      return preloader
    }
  },
  mutations: {
    SET_PRELOADER (state, bool) {
      state.preloader = bool
    }
  }
}

export default preloaderStore
