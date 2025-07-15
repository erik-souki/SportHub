import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BetsView from '../views/BetsView.vue';
import MyBetsView from '../views/MyBetsView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/palpites', component: BetsView },
  { path: '/meus-palpites', component: MyBetsView },
  { path: '/perfil', component: ProfileView },
  {
    path: '/bets',
    name: 'Bets',
    component: () => import('@/views/BetsView.vue'),
  },
  {
    path: '/my-bets',
    name: 'MyBets',
    component: () => import('@/views/MyBetsView.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
