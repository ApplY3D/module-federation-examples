import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },

  mutations: {
    _increment(state) {
      state.count++;
    },
    _decrement(state) {
      state.count--;
    },
  },

  actions: {
    increment(state) {
      state.commit('_increment');
    },
    decrement(state) {
      state.commit('_decrement');
    },
  },

  modules: {},
});
