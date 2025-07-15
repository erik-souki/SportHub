<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-2">Agenda de Jogos</h3>
    <ul>
      <li v-for="(game, index) in games" :key="index" class="mb-2">
        <span>{{ game.match }}</span> <span class="float-right">{{ game.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  games: Array,
});
</script>