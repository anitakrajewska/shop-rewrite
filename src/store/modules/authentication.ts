import { RootState } from '@/types/store/root-state.d';
import { AuthState } from '@/types/store/auth-state.d';
import { ActionContext, Module } from 'vuex';

const module: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  getters: {
    isAuthenticated: (state: AuthState) => state.isLoggedIn,
  },
  mutations: {
    login: (state: AuthState) => state.isLoggedIn = true,
    logout: (state: AuthState) => state.isLoggedIn = false,
  },
  actions: {
    login: (ctx: ActionContext<AuthState, any>) => ctx.commit('login'),
    logout: (ctx: ActionContext<AuthState, any>) => ctx.commit('logout')
  }
}
export default module;
