<template>
  <div class="flex h-screen bg-neutral-900">
    <aside class="w-60 bg-gray-800 text-white p-6 transition-all duration-300 hover:bg-gray-700">
      <h2 class="text-3xl font-bold text-yellow-300 mb-8">RoarSync</h2>
      <nav  class="bg-blue-900 text-white h-16 shadow-md rounded-lg">
        <ul>
          <li v-for="item in navItems" :key="item.name" class="mb-6">
            <router-link :to="item.route" class="text-lg hover:text-yellow-200 hover:underline">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="flex-1 p-6 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const navItems = ref([
  { name: 'Home', route: '/' },
  { name: 'Gritos ao Vivo', route: '/gritos' },
  { name: 'Palpites', route: '/palpites' },
  { name: 'Ranking', route: '/ranking' },
  { name: 'Perfil', route: '/perfil' },
  { name: 'Visitante', route: '/visitante' },
  { name: 'Fazer Login', route: '/login' },
]);
</script>