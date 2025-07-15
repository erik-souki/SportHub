<template>
  <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
    <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Ranking de Torcedores</h2>
    <div class="grid gap-4">
      <div v-for="(user, index) in rankings" :key="index" class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
           :class="{ 'bg-yellow-100 border-yellow-300': index === 0, 'bg-green-100 border-green-300': index > 0 && index < 3, 'bg-gray-100 border-gray-300': index >= 3 }">
        <span class="text-lg font-semibold text-gray-800">{{ user.position }}º</span>
        <span class="text-lg text-gray-700">{{ user.name }}</span>
        <span class="text-lg font-medium text-gray-600">{{ user.points }} pts</span>
      </div>
    </div>
    <p v-if="rankings.length === 0" class="text-red-600 mt-4 font-medium">Nenhum ranking disponível</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  rankings: {
    type: Array,
    default: () => [],
  },
});
</script>