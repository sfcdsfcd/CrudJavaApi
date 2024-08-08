import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../views/Home.vue';
import Login from '@/components/Login.vue';
import Produtos from '@/components/Produtos.vue';

const routes = [
  //{ path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/products', component: Produtos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;