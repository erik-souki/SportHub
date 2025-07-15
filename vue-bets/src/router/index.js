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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;