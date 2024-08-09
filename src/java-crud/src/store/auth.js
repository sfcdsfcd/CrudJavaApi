import axios from 'axios';

export default {
  state: {
    status: '',
    token: '',
  },
  mutations: {
    auth_success(state, token) {
      state.status = 'success';
      state.token = token;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  getters : {
    isAuthenticated(state){
      return !!state.token;
    }
  },
  actions : {
    async login({ commit }, user) {
      try {
        // Autenticação usando Basic Auth
        const authHeader = 'Basic ' + btoa(`${user.username}:${user.password}`);
        
        // Opcional: armazenar o token ou utilizá-lo diretamente nas requisições
        commit('auth_success', authHeader);
        
        // Configura axios para usar o token em todas as requisições
        axios.defaults.headers.common['Authorization'] = authHeader;
  
        // Verificação simples de autenticação, opcionalmente pode chamar um endpoint seguro para testar
        const response = await axios.get('/api/produtos');
        console.log('Login bem-sucedido:', response.data);
        
      } catch (err) {
        commit('auth_error');
        console.error('Erro de autenticação:', err);
      }
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
  }
};