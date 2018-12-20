import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
  },
  actions: {
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {
    productsModules,
  },
});