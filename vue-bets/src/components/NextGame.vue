<template>
  <div class="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
    <h3 class="text-2xl font-bold text-green-800 mb-4">Próximo Jogo</h3>
    <p class="text-gray-700 text-lg mb-4">{{ league }} - {{ date }}</p>
    <div class="flex items-center justify-between mb-6 border-b-2 border-green-200 pb-4">
      <span class="text-xl font-semibold text-green-900">{{ homeTeam }}</span>
      <span class="text-3xl font-extrabold text-red-600">VS</span>
      <span class="text-xl font-semibold text-green-900">{{ awayTeam }}</span>
    </div>
    <button @click="makePrediction" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
      Fazer meu Palpite
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  league: String,
  date: String,
  homeTeam: String,
  awayTeam: String,
});

const makePrediction = () => {
  alert('Funcionalidade de palpite em desenvolvimento!');
};
</script>