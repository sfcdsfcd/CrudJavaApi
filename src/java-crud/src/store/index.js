import { createStore } from 'vuex';
import auth from './auth';
import product from './produto';

export default createStore({
  modules: {
    auth,
    product,
  },
});