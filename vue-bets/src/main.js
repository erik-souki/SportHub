import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './assets/main.css';

// Comente ou remova a importação de style.css, pois o CDN cuida dos estilos
// import './style.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');