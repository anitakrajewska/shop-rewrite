import { createStore } from 'vuex'
import cardModule from '@/store/modules/card.js'
import productsModule from '@/store/modules/products.js'

// Create a new store instance.
const store = createStore({
  modules: {
    card: cardModule,
    prods: productsModule
  },
  state () {
    return {
      isLoggedIn: false
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
  actions: {
    login(ctx) {
      ctx.commit('login')
    },
    logout(ctx) {
      ctx.commit('logout')
    }
  }
})

export default store;
