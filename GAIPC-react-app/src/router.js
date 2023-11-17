// router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'), // Reemplaza con tu componente de inicio
  },
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue'), // Reemplaza con tu componente de dashboard
  },
  // Agrega otras rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
