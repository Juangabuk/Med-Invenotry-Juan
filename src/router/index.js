import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home.vue';
// import Inventory from '@/views/Inventory.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/views/LoginForm.vue';
import RegisterForm from '@/views/RegisterForm.vue';

Vue.use(Router);

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/inventory',
//       name: 'inventory',
//       component: Inventory
//     }
//   ]
// });

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginForm },
    { path: '/register', component: RegisterForm }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;