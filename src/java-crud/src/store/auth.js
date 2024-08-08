import axios from 'axios';

export default {
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('/api/login', credentials);
      commit('setToken', response.data.token);
    },
    logout({ commit }) {
      commit('clearToken');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
};