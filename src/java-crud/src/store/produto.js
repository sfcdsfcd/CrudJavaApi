import axios from 'axios';

export default {
  state: {
    produtos: [],
  },
  mutations: {
    setProdutos(state, produtos) {
      state.produtos = produtos;
    },
    addProduto(state, produto) {
      state.produtos.push(produto);
    },
    updateProduto(state, updatedProduto) {
      const index = state.produtos.findIndex(p => p.id === updatedProduto.id);
      if (index !== -1) {
        state.produtos.splice(index, 1, updatedProduto);
      }
    },
    deleteProduto(state, produtoId) {
      state.produtos = state.produtos.filter(p => p.id !== produtoId);
    },
  },
  actions: {
    async fetchProdutos({ commit }) {
      const response = await axios.get('/api/produtos');
      commit('setProdutos', response.data);
    },
    async addProduto({ commit }, produto) {
      const response = await axios.post('/api/produtos', produto);
      commit('addProduto', response.data);
    },
    async updateProduto({ commit }, produto) {
      const response = await axios.put(`/api/produtos/${produto.id}`, produto);
      commit('updateProduto', response.data);
    },
    async deleteProduto({ commit }, produtoId) {
      await axios.delete(`/api/produtos/${produtoId}`);
      commit('deleteProduto', produtoId);
    },
  },
  getters: {
    produtos(state) {
      return state.produtos;
    },
  },
};