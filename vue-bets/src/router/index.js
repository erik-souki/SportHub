import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import BetsView from '@/views/BetsView.vue';
import MyBetsView from '@/views/MyBetsView.vue';
import ProfileView from '@/views/ProfileView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/bets', name: 'Bets', component: BetsView },
  { path: '/my-bets', name: 'MyBets', component: MyBetsView },
  { path: '/profile', name: 'Profile', component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
