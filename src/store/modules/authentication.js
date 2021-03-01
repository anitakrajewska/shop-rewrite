export default {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  getters: {
    isAuthenticated: (state) => state.isLoggedIn,
  },
  mutations: {
    login: (state) => state.isLoggedIn = true,
    logout: (state) => (state.isLoggedIn = false),
  },
  actions: {
    login: (ctx) => ctx.commit('login'),
    logout: (ctx) => ctx.commit('logout')
  }
}
