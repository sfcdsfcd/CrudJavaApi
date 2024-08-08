import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_JAVA_API_URL;

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');